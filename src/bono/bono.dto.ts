import {IsDecimal, IsNotEmpty, IsNumber, IsString, IsUrl} from 'class-validator';
export class BonoDto {

    @IsNumber()
    @IsNotEmpty()
    readonly monto: number;
    
    @IsNotEmpty()
    readonly calificacion: number;
    
    @IsString()
    @IsNotEmpty()
    readonly palabraclave: string;

    @IsNotEmpty()
    @IsString()
    usuarioId: string;

    @IsNotEmpty()
    @IsString()
    claseId: string;
}