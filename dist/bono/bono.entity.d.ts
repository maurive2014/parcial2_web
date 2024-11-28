import { ClaseEntity } from 'src/clase/clase.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
export declare class BonoEntity {
    id: number;
    monto: number;
    calificacion: number;
    palabraclave: string;
    usuario: UsuarioEntity;
    clase: ClaseEntity;
}
