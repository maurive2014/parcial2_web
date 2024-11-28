
import { ClaseEntity } from 'src/clase/clase.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

export class BonoEntity {

    @PrimaryGeneratedColumn('increment', { type: 'bigint' })
    id: number;

    @Column()
    monto: number;
    
    @Column('decimal', { precision: 6, scale: 2 })
    calificacion: number;
    
    @Column()
    palabraclave: string;
    

    @ManyToOne(() => UsuarioEntity, usuario => usuario.bonos)
    usuario: UsuarioEntity;

    @ManyToOne(() => ClaseEntity, clase => clase.bonos)
    clase: ClaseEntity;
}
