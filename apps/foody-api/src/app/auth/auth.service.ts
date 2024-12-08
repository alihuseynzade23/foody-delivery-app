import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.model';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { compare, genSalt, hash } from 'bcryptjs';
import {
  INVALID_ACCESS_TOKEN_ERROR,
  INVALID_REFRESH_TOKEN_ERROR,
  // TOKEN_EXPIRED_ERROR,
  USER_NOT_FOUND_ERROR,
  WRONG_PASSWORD_ERROR,
} from './auth.constants';
import { AuthDto } from './dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(dto: AuthDto) {
    const salt = await genSalt(10);
    const newUser = new this.userModel({
      email: dto.login,
      passwordHash: await hash(dto.password, salt),
      role: dto.role || 'user',
      username: dto.username,
      fullName: dto.fullName,
    });
    return newUser.save();
  }

  async findUser(email: string) {
    return this.userModel.findOne({ email }).exec();
  }

  async validateUser(login: string, password: string): Promise<Pick<User, 'email' | 'role'>> {
    const user = await this.findUser(login);
    if (!user) {
      throw new UnauthorizedException(USER_NOT_FOUND_ERROR);
    }
    const isCorrect = await compare(password, user.passwordHash);
    if (!isCorrect) {
      throw new UnauthorizedException(WRONG_PASSWORD_ERROR);
    }
    return { email: user.email, role: user.role };
  }

  async login(email: string) {
    const user = await this.findUser(email);
    if (!user) {
      throw new UnauthorizedException(USER_NOT_FOUND_ERROR);
    }
    const payload = { email: user.email, role: user.role };
    const access_token = await this.jwtService.signAsync(payload, { expiresIn: '15m' });
    const refresh_token = await this.jwtService.signAsync(payload, { expiresIn: '7d' });

    return {
      access_token,
      refresh_token,
      user,
    };
  }

  async validateRefreshToken(refreshToken: string): Promise<{ email: string; role: string }> {
    try {
      return this.jwtService.verify(refreshToken);
    } catch (error) {
      throw new UnauthorizedException(INVALID_REFRESH_TOKEN_ERROR);
    }
  }

  async generateNewTokens(refreshToken: string) {
    const decoded = await this.validateRefreshToken(refreshToken);

    const newAccessToken = await this.jwtService.signAsync(
      { email: decoded.email, role: decoded.role },
      { expiresIn: '15m' },
    );

    const newRefreshToken = await this.jwtService.signAsync(
      { email: decoded.email, role: decoded.role },
      { expiresIn: '7d' },
    );

    return {
      access_token: newAccessToken,
      refresh_token: newRefreshToken,
    };
  }

  async getUserFromToken(accessToken: string) {
    try {
      const { email } = await this.jwtService.verifyAsync(accessToken);

      if (!email) {
        throw new UnauthorizedException(INVALID_ACCESS_TOKEN_ERROR);
      }

      const user = await this.findUser(email);

      if (!user) {
        throw new UnauthorizedException(USER_NOT_FOUND_ERROR);
      }

      return user;
    } catch (error: unknown) {
      throw new UnauthorizedException(INVALID_ACCESS_TOKEN_ERROR);
    }
  }
}
