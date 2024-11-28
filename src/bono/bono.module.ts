import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BonoEntity } from './bono.entity';
import { BonoService } from './bono.service';

@Module({
  imports: [TypeOrmModule.forFeature([BonoEntity])],
  providers: [BonoService]
})
export class BonoModule {}
