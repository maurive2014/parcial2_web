import { BonoEntity } from 'src/bono/bono.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ClaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nombre: string;

    @Column()
    codigo: string;

    @Column()
    numerocreditos: number;
    
    
    @ManyToOne(() => UsuarioEntity, usuario => usuario.clases)
    usuario: UsuarioEntity;

    @OneToMany(() => BonoEntity, bono => bono.clase)
    bonos: BonoEntity[];
}
