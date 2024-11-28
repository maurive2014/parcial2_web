import { BonoEntity } from 'src/bono/bono.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
export class ClaseEntity {
    @PrimaryGeneratedColumn('increment', { type: 'bigint' })
    id: number;

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
