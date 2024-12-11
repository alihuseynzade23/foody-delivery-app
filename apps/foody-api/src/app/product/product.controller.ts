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
import { ProductService } from './product.service';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { ProductDto } from './dto/product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from '../files/files.service';
import { MFile } from '../files/mfile.class';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly filesService: FilesService,
  ) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  @UsePipes(new ValidationPipe())
  async create(@UploadedFile() file: Express.Multer.File, @Body() dto: ProductDto) {
    let imageUrl = '';

    if (file) {
      const savedFiles = await this.filesService.saveFiles([new MFile(file)]);
      imageUrl = savedFiles[0].url;
    }

    return this.productService.createProduct({
      ...dto,
      image: imageUrl,
    });
  }

  @Get('all')
  @UseGuards(JwtAuthGuard)
  async getAll() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getOne(@Param('id') id: string) {
    return await this.productService.getProductById(id);
  }

  @Get('byRestaurantId/:restaurantId')
  @UseGuards(JwtAuthGuard)
  async getByRestaurantId(@Param('restaurantId') restaurantId: string) {
    return await this.productService.getProductByRestaurantId(restaurantId);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
    @Body() dto: ProductDto,
  ) {
    let imageUrl = '';

    if (file) {
      const savedFiles = await this.filesService.saveFiles([new MFile(file)]);
      imageUrl = savedFiles[0].url;
    }

    return await this.productService.updateProduct(id, {
      name: dto.name,
      restaurantId: dto.restaurantId,
      price: dto.price,
      description: dto.description,
      image: imageUrl,
    });
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
