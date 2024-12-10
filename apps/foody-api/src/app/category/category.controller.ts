import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
  UseGuards,
  Put,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CategoryService } from './category.service';
import { FilesService } from '../files/files.service';
import { CategoryDto } from './dto/category.dto';
import { MFile } from '../files/mfile.class';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { CATEGORY_NOT_FOUND_ERROR } from './category.constants';

@Controller('category')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly filesService: FilesService,
  ) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('image'))
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  async create(@UploadedFile() file: Express.Multer.File, @Body() dto: CategoryDto) {
    let imageUrl = '';

    if (file) {
      const savedFiles = await this.filesService.saveFiles([new MFile(file)]);
      imageUrl = savedFiles[0].url;
    }

    return this.categoryService.createCategory({
      name: dto.name,
      image: imageUrl,
    });
  }

  @Get('all')
  @UseGuards(JwtAuthGuard)
  async getAll() {
    return await this.categoryService.getAllCategories();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getOne(@Param('id') id: string) {
    return this.categoryService.getCategoryById(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  @UsePipes(new ValidationPipe())
  async update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() dto: CategoryDto,
  ) {
    let imageUrl = '';

    if (file) {
      const savedFiles = await this.filesService.saveFiles([new MFile(file)]);
      imageUrl = savedFiles[0].url;
    }

    const updatedCategory = this.categoryService.updateCategory(id, {
      name: dto.name,
      image: imageUrl,
    });
    if (!updatedCategory) {
      throw new NotFoundException(CATEGORY_NOT_FOUND_ERROR);
    }
    return updatedCategory;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string) {
    return await this.categoryService.deleteCategory(id);
  }
}
