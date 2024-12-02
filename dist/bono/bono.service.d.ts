import { Repository } from 'typeorm';
import { BonoEntity } from './bono.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';
export declare class BonoService {
    private readonly bonoRepository;
    private readonly usuarioRepository;
    constructor(bonoRepository: Repository<BonoEntity>, usuarioRepository: Repository<UsuarioEntity>);
    crearBono(bono: BonoEntity): Promise<BonoEntity>;
    findBonoByCodigo(id: string): Promise<BonoEntity>;
    findAllBonosByUsuario(userID: string): Promise<BonoEntity[]>;
    deleteBono(id: string): Promise<void>;
}
