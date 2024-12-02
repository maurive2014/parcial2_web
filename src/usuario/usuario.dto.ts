import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class UsuarioDto {
  
  @IsNotEmpty()
  @IsString()
  readonly nombre: string;

  @IsNotEmpty()
  @IsString()
  readonly rol: string;

  @IsNotEmpty()
  @IsEmail()
  readonly correo: string;

  @IsNotEmpty()
  @IsNumber()
  readonly cedula: number;
  
  @IsNotEmpty()
  @IsString()
  readonly grupodeinvestigacion: string;
  
  @IsNotEmpty()
  @IsNumber()
  readonly numeroextension: number;

}
