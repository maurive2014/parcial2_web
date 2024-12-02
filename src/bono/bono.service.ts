import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { BonoEntity } from './bono.entity';
import { UsuarioEntity, UserRole } from '../usuario/usuario.entity';

@Injectable()
export class BonoService {

    constructor(
        @InjectRepository(BonoEntity)
        private readonly bonoRepository: Repository<BonoEntity>,

        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>,
    ){}

    async crearBono(bono: BonoEntity): Promise<BonoEntity> {
        if (!bono.monto || (bono.monto <= 0)){
            throw new BusinessLogicException("El monto está mal", BusinessError.PRECONDITION_FAILED);
        }
        console.log(bono.usuarioId)
        const usuario:UsuarioEntity = await this.usuarioRepository.findOne({where: { id: bono.usuarioId },});
    
        if (!usuario) {
            throw new BusinessLogicException('El usuario asociado al bono no existe.', BusinessError.NOT_FOUND);
        }

        if (usuario.rol !== UserRole.PROFESOR) {
            throw new BusinessLogicException('Solo un usuario con rol de Profesor puede tener un bono.', BusinessError.PRECONDITION_FAILED);
        }

        return await this.bonoRepository.save(bono);
    }

    //ID, en lugar del cod
    async findBonoByCodigo(id: string): Promise<BonoEntity> {
        const bono: BonoEntity = await this.bonoRepository.findOne({where: {id} } );
        if (!bono)
          throw new BusinessLogicException("The bono with the given id was not found", BusinessError.NOT_FOUND);
   
        return bono;
    }

    async findAllBonosByUsuario(userID: string): Promise<BonoEntity[]> {
        const usuario = await this.usuarioRepository.findOne({
            where: { id: userID },
        });

        if (!usuario) {
            throw new BusinessLogicException('El usuario con el ID dado no fue encontrado.',BusinessError.NOT_FOUND);
        }

        return await this.bonoRepository.find({where: { usuario: { id: userID } }});
    }

    async deleteBono(id: string) {
        const bono: BonoEntity = await this.bonoRepository.findOne({where:{id}});
        if (!bono)
          throw new BusinessLogicException("The bono with the given id was not found", BusinessError.NOT_FOUND);

        if (bono.calificacion > 4) {
            throw new BusinessLogicException('No se puede eliminar un bono con una calificación mayor a 4.',BusinessError.PRECONDITION_FAILED);
        }
     
        await this.bonoRepository.remove(bono);
    }

    


}
