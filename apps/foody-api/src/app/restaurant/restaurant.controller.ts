import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { RestaurantDto } from './dto/restaurant.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from '../files/files.service';
import { MFile } from '../files/mfile.class';

@Controller('restaurant')
export class RestaurantController {
  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly filesService: FilesService,
  ) {}

  @Post('create')
//   @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  @UsePipes(new ValidationPipe())
  async create(@UploadedFile() file: Express.Multer.File, @Body() dto: RestaurantDto) {
    let imageUrl = '';

    if (file) {
      const savedFiles = await this.filesService.saveFiles([new MFile(file)]);
      imageUrl = savedFiles[0].url;
    }

    return this.restaurantService.createRestaurant({
      ...dto,
      image: imageUrl,
    });
  }

  @Get('all')
//   @UseGuards(JwtAuthGuard)
  async getAll() {
    return this.restaurantService.getAllRestaurants();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getOne(@Param('id') id: string) {
    return await this.restaurantService.getRestaurantById(id);
  }

  @Get('byCategoryId/:categoryId')
  @UseGuards(JwtAuthGuard)
  async getByCategoryId(@Param('categoryId') categoryId: string) {
    return await this.restaurantService.getRestaurantByCategoryId(categoryId);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
    dto: RestaurantDto,
  ) {
    let imageUrl = '';

    if (file) {
      const savedFiles = await this.filesService.saveFiles([new MFile(file)]);
      imageUrl = savedFiles[0].url;
    }

    return await this.restaurantService.updateRestaurant(id, {
      ...dto,
      image: imageUrl,
    });
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string) {
    return this.restaurantService.deleteRestaurant(id);
  }
}
