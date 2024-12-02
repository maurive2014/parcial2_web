
import { ClaseEntity } from 'src/clase/clase.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BonoEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    monto: number;
    
    @Column('decimal', { precision: 6, scale: 2 })
    calificacion: number;
    
    @Column()
    palabraclave: string;
    
    @Column()
    usuarioId: string;

    @ManyToOne(() => ClaseEntity, clase => clase.bonos)
    clase: ClaseEntity;
}
