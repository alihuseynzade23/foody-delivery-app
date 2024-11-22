import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UnauthorizedException,
  // UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import {
  ALREADY_REGISTERED_ERROR,
  NOT_ADMIN_ERROR,
  REFRESH_TOKEN_REQUIRED_ERROR,
} from './auth.constants';
// import { RolesGuard } from './guards/role.guard';
// import { Roles } from './decorators/roles.decorator';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @UsePipes(new ValidationPipe())
  @Post('login')
  async login(@Body() { login, password }: AuthDto) {
    const { email } = await this.authService.validateUser(login, password);
    return this.authService.login(email);
  }

  @UsePipes(new ValidationPipe())
  @Post('register')
  async register(@Body() dto: AuthDto) {
    const oldUser = await this.authService.findUser(dto.login);
    if (oldUser) {
      throw new BadRequestException(ALREADY_REGISTERED_ERROR);
    }
    return this.authService.createUser(dto);
  }

  @UsePipes(new ValidationPipe())
  @Post('login/admin')
  async loginAdmin(@Body() { login, password }: AuthDto) {
    const adminCredentials = {
      email: this.configService.get('ADMIN_EMAIL'),
      password: this.configService.get('ADMIN_PASSWORD'),
    };

    if (login !== adminCredentials.email || password !== adminCredentials.password) {
      throw new UnauthorizedException(NOT_ADMIN_ERROR);
    }

    return this.authService.login(login);
  }

  @Post('refresh')
  async refresh(@Body('refresh_token') refreshToken: string) {
    if (!refreshToken) {
      throw new UnauthorizedException(REFRESH_TOKEN_REQUIRED_ERROR);
    }
    return this.authService.generateNewAccessToken(refreshToken);
  }
}
