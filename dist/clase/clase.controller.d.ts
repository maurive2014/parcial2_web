import { ClaseDto } from './clase.dto';
import { ClaseEntity } from './clase.entity';
import { ClaseService } from './clase.service';
export declare class ClaseController {
    private readonly claseService;
    constructor(claseService: ClaseService);
    findClaseById(claseId: string): Promise<ClaseEntity>;
    crearClase(claseDto: ClaseDto): Promise<ClaseEntity>;
}
