import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { ClaseEntity } from './clase.entity';

@Injectable()
export class ClaseService {
    constructor(
        @InjectRepository(ClaseEntity)
        private readonly claseRepository: Repository<ClaseEntity>,
    ) {}

    async crearClase(clase: ClaseEntity): Promise<ClaseEntity> {
        if (clase.codigo.length !== 10) {
            throw new BusinessLogicException('El código de la clase debe tener exactamente 10 caracteres.', BusinessError.PRECONDITION_FAILED);
          }
        return await this.claseRepository.save(clase);
    }

    async findClaseById(id: string): Promise<ClaseEntity> {
        const clase: ClaseEntity = await this.claseRepository.findOne({where: {id}, relations: ["bonos"] } );
        if (!clase)
          throw new BusinessLogicException("The clase with the given id was not found", BusinessError.NOT_FOUND);
   
        return clase;
    }
}
