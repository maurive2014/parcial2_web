import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class ClaseDto {
  @IsNotEmpty()
  @IsString()
  readonly nombre: string;

  @IsNotEmpty()
  @IsString()
  readonly codigo: string;

  @IsNotEmpty()
  @IsInt()
  readonly numerocreditos: number;
}