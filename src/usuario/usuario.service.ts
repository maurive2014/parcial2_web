import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>
    ){}


    async create(usuario: UsuarioEntity): Promise<UsuarioEntity> {


        if (!(["TICSW", "IMAGINE", "COMIT"].includes(usuario.grupodeinvestigacion))){
            throw new BusinessLogicException("El grupo de investigación está mal", BusinessError.PRECONDITION_FAILED);
        }

        if (usuario.rol === "Decana" && usuario.numeroextension.toString().length !== 8){
            throw new BusinessLogicException("El número de extensión debe ser de 8 para la decana", BusinessError.PRECONDITION_FAILED);
        }

        return await this.usuarioRepository.save(usuario);
    }

    async delete(id: number) {
        const usuario: UsuarioEntity = await this.usuarioRepository.findOne({where:{id}});
        if (!usuario)
          throw new BusinessLogicException("The museum with the given id was not found", BusinessError.NOT_FOUND);
        await this.usuarioRepository.remove(usuario);
    }


}
