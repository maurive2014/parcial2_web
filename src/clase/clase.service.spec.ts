/* eslint-disable prettier/prettier */
/*archivo src/clase/clase.service.spec.ts*/
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { ClaseEntity } from './clase.entity';
import { ClaseService } from './clase.service';

describe('ClaseService', () => {
 let service: ClaseService;
 let repository: Repository<ClaseEntity>;

 beforeEach(async () => {
   const module: TestingModule = await Test.createTestingModule({
     imports: [...TypeOrmTestingConfig()],
     providers: [ClaseService],
   }).compile();

   service = module.get<ClaseService>(ClaseService);
   repository = module.get<Repository<ClaseEntity>>(getRepositoryToken(ClaseEntity));
 });
  
 it('should be defined', () => {
   expect(service).toBeDefined();
 });

 describe('crearClase', () => {
  it('should create a clase with valid data', async () => {
    const clase: ClaseEntity = {
      id: '1',
      nombre: 'Matemáticas',
      codigo: '1234567890',
      numerocreditos: 3,
      usuario: null,
      bonos: [],
    };

    const savedClase = {
      ...clase,
      id: '1',
    };

    jest.spyOn(repository, 'save').mockResolvedValue(savedClase);

    const result = await service.crearClase(clase);
    expect(result).toEqual(savedClase);
    expect(repository.save).toHaveBeenCalledWith(clase);
  });

  it('should throw an error if the code length is not 10', async () => {
    const clase: ClaseEntity = {
      id: '1',
      nombre: 'Física',
      codigo: '12345456789999998765', // Invalido
      numerocreditos: 4,
      usuario: null,
      bonos: [],
    };

    await expect(service.crearClase(clase)).rejects.toHaveProperty("message", "El código de la clase debe tener exactamente 10 caracteres.")
  });

  describe('findClaseById', () => {
    it('should return a clase by ID', async () => {
      const clase: ClaseEntity = {
        id: '1',
        nombre: 'Química',
        codigo: '0987654321',
        numerocreditos: 3,
        usuario: null,
        bonos: [],
      };

      jest.spyOn(repository, 'findOne').mockResolvedValue(clase);

      const result = await service.findClaseById('1');
      expect(result).toEqual(clase);
      expect(repository.findOne).toHaveBeenCalledWith({
        where: { id: '1' },
        relations: ['bonos'],
      });
    });

    it('should throw an error if the clase is not found', async () => {
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);

      await expect(service.findClaseById('999')).rejects.toHaveProperty("message", "The clase with the given id was not found")
    });


    });
  });

  
});




