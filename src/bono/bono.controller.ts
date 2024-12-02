import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors/business-errors.interceptor';
import { BonoDto } from './bono.dto';
import { BonoEntity } from './bono.entity';
import { BonoService } from './bono.service';

@Controller('bonos')
@UseInterceptors(BusinessErrorsInterceptor)
export class BonoController {

    constructor(private readonly bonoService: BonoService) {}

    @Post()
    async crearBono(@Body() bonoDto: BonoDto) {
        const bono: BonoEntity = plainToInstance(BonoEntity, bonoDto);
        return await this.bonoService.crearBono(bono);
    }

    @Get(':cod')
    async findBonoByCodigo(@Param('cod') cod: string){
        return await this.bonoService.findBonoByCodigo(cod);
    }

    @Get('usuario/:userID')
    async findAllBonosByUsuario(@Param('userID') userID: string): Promise<BonoEntity[]> {
      return await this.bonoService.findAllBonosByUsuario(userID);
    }

    @Delete(':id')
    @HttpCode(204)
    async deleteBono(@Param('id') id: string) {
        return await this.bonoService.deleteBono(id);
    }
}
