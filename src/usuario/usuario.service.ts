import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { BonoEntity } from 'src/bono/bono.entity';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>,

        @InjectRepository(BonoEntity)
        private readonly bonoRepository: Repository<BonoEntity>,
    ){}


    async crearUsuario(usuario: UsuarioEntity): Promise<UsuarioEntity> {


        if (usuario.rol === "Profesor" && !(["TICSW", "IMAGINE", "COMIT"].includes(usuario.grupodeinvestigacion))){
            throw new BusinessLogicException("El grupo de investigación está mal", BusinessError.PRECONDITION_FAILED);
        }

        if (usuario.rol === "Decana" && usuario.numeroextension.toString().length !== 8){
            throw new BusinessLogicException("El número de extensión debe ser de 8 para la decana", BusinessError.PRECONDITION_FAILED);
        }

        return await this.usuarioRepository.save(usuario);
    }

    async eliminarUsuario(id: string) {
        const usuario: UsuarioEntity = await this.usuarioRepository.findOne({where:{id}});
        if (!usuario)
          throw new BusinessLogicException("The usuario with the given id was not found", BusinessError.NOT_FOUND);
        
        if (usuario.rol === "Decana") {
            throw new BusinessLogicException("No se puede eliminar un usuario con rol de Decana", BusinessError.PRECONDITION_FAILED);
        }

        const tieneBonos = await this.bonoRepository.count({ where: { usuario: { id } } });
        if (tieneBonos > 0) {
            throw new BusinessLogicException("No se puede eliminar un usuario con bonos asociados", BusinessError.PRECONDITION_FAILED);
        }
        await this.usuarioRepository.remove(usuario);
    }

    async findUsuarioById(id: string): Promise<UsuarioEntity> {
        const usuario: UsuarioEntity = await this.usuarioRepository.findOne({where: {id}, relations: ["bonos", "clases"] } );
        if (!usuario)
          throw new BusinessLogicException("The usuario with the given id was not found", BusinessError.NOT_FOUND);
   
        return usuario;
    }


}
