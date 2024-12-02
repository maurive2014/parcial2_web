import { BonoEntity } from 'src/bono/bono.entity';
import { ClaseEntity } from 'src/clase/clase.entity';
export declare enum UserRole {
    PROFESOR = "Profesor",
    DECANA = "Decana"
}
export declare class UsuarioEntity {
    id: string;
    cedula: number;
    nombre: string;
    grupodeinvestigacion: string;
    numeroextension: number;
    rol: string;
    jefe: UsuarioEntity;
    subordinados: UsuarioEntity[];
    bonos: BonoEntity[];
    clases: ClaseEntity[];
}
