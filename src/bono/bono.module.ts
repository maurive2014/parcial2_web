import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BonoEntity } from './bono.entity';
import { BonoService } from './bono.service';
import { UsuarioModule } from '../usuario/usuario.module'; // Importa el módulo correcto
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { BonoController } from './bono.controller';

@Module({
  imports: [UsuarioModule, TypeOrmModule.forFeature([BonoEntity, UsuarioEntity])],
  providers: [BonoService],
  controllers: [BonoController]
})
export class BonoModule {}
