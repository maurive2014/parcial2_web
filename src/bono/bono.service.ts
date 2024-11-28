import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { BonoEntity } from './bono.entity';

@Injectable()
export class BonoService {

    constructor(
        @InjectRepository(BonoEntity)
        private readonly bonoRepository: Repository<BonoEntity>
    ){}

    async create(bono: BonoEntity): Promise<BonoEntity> {


        if (!bono.monto || (bono.monto > 0)){
            throw new BusinessLogicException("El monto está mal", BusinessError.PRECONDITION_FAILED);
        }

        return await this.bonoRepository.save(bono);
    }


}
