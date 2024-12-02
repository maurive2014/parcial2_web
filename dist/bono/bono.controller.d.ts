import { BonoDto } from './bono.dto';
import { BonoEntity } from './bono.entity';
import { BonoService } from './bono.service';
export declare class BonoController {
    private readonly bonoService;
    constructor(bonoService: BonoService);
    crearBono(bonoDto: BonoDto): Promise<BonoEntity>;
    findBonoByCodigo(cod: string): Promise<BonoEntity>;
    findAllBonosByUsuario(userID: string): Promise<BonoEntity[]>;
    deleteBono(id: string): Promise<void>;
}
