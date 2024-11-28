import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClaseEntity } from './clase.entity';
import { ClaseService } from './clase.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClaseEntity])],
  providers: [ClaseService]
})
export class ClaseModule {}
