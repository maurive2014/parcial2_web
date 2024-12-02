/* eslint-disable prettier/prettier */
/*archivo src/bono/bono.service.spec.ts*/
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { BonoEntity } from './bono.entity';
import { BonoService } from './bono.service';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { faker } from '@faker-js/faker';

const mockUsuarioRepository = {
  // Define mock methods for UsuarioEntityRepository as needed
};

describe('BonoService', () => {
 let service: BonoService;
 let repository: Repository<BonoEntity>;

 beforeEach(async () => {
  jest.setTimeout(10000); // Set the timeout to 10 seconds (10000 ms)
   const module: TestingModule = await Test.createTestingModule({
     imports: [...TypeOrmTestingConfig(), UsuarioEntity],
     providers: [BonoService,
      {
        provide: getRepositoryToken(UsuarioEntity),
        useValue: mockUsuarioRepository,
      },],
   }).compile();

   await module.init();

   service = module.get<BonoService>(BonoService);
   repository = module.get<Repository<BonoEntity>>(getRepositoryToken(BonoEntity));
 });
  
 it('should be defined', () => {
   expect(service).toBeDefined();
 });

 describe('crearBono', () => {
  it('should create a bono with valid data', async () => {
    const usuario = {
      id: '2',
      nombre: faker.name.fullName(),
      rol: "Profesor",
    } as UsuarioEntity;

    const bono: BonoEntity = {
      id: '1',
      monto: 100,
      calificacion: 4.5,
      palabraclave: faker.lorem.word(),
      usuario,
      clase: null,
    };


    const result = await service.crearBono(bono);
    expect(result).toEqual(bono);
  });

  // it('should throw an error if monto is invalid', async () => {
  //   const bono: BonoEntity = {
  //     id: faker.datatype.uuid(),
  //     monto: -10,
  //     calificacion: 4.5,
  //     palabraclave: faker.lorem.word(),
  //     usuario: { id: faker.datatype.uuid() } as UsuarioEntity,
  //     clase: null,
  //   };

  //   await expect(service.crearBono(bono)).rejects.toThrow(
  //     new BusinessLogicException('El monto está mal', 'PRECONDITION_FAILED'),
  //   );
  // });
});

});