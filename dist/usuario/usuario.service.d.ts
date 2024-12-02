import { Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { BonoEntity } from 'src/bono/bono.entity';
export declare class UsuarioService {
    private readonly usuarioRepository;
    private readonly bonoRepository;
    constructor(usuarioRepository: Repository<UsuarioEntity>, bonoRepository: Repository<BonoEntity>);
    crearUsuario(usuario: UsuarioEntity): Promise<UsuarioEntity>;
    eliminarUsuario(id: string): Promise<void>;
    findUsuarioById(id: string): Promise<UsuarioEntity>;
}
