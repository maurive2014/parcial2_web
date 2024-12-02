import { Repository } from 'typeorm';
import { ClaseEntity } from './clase.entity';
export declare class ClaseService {
    private readonly claseRepository;
    constructor(claseRepository: Repository<ClaseEntity>);
    crearClase(clase: ClaseEntity): Promise<ClaseEntity>;
    findClaseById(id: string): Promise<ClaseEntity>;
}
