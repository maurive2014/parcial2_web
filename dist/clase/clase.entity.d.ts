import { BonoEntity } from 'src/bono/bono.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
export declare class ClaseEntity {
    id: number;
    nombre: string;
    codigo: string;
    numerocreditos: number;
    usuario: UsuarioEntity;
    bonos: BonoEntity[];
}
