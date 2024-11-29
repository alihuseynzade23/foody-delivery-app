import { Injectable } from '@nestjs/common';
import { ensureDir, writeFile } from 'fs-extra';
import { format } from 'date-fns';
import { FileElementResponse } from './dto/file-element.response';
import { path } from 'app-root-path';
import sharp from 'sharp';
import { MFile } from './mfile.class';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';

@Injectable()
export class FilesService {
  constructor(private readonly configService: ConfigService) {}

  async saveFiles(files: MFile[]): Promise<FileElementResponse[]> {
    const dateFolder = format(new Date(), 'yyyy-MM-dd');
    const uploadFolder = `${path}/uploads/${dateFolder}`;
    await ensureDir(uploadFolder);

    const res: FileElementResponse[] = [];
    for (const file of files) {
      await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);

      res.push({
        url: `${this.configService.get<string>('SERVER_URL')}/uploads/${dateFolder}/${
          file.originalname
        }`,
        name: file.originalname,
      });
    }
    return res;
  }

  convertToWebP(file: Buffer): Promise<Buffer> {
    return sharp(file).webp().toBuffer();
  }
}
