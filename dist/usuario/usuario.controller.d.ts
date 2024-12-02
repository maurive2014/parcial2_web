import { UsuarioDto } from './usuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    crearUsuario(usuarioDto: UsuarioDto): Promise<UsuarioEntity>;
    findUsuarioById(usuarioId: string): Promise<UsuarioEntity>;
    eliminarUsuario(usuarioId: string): Promise<void>;
}
