import { BonoEntity } from 'src/bono/bono.entity';
import { ClaseEntity } from 'src/clase/clase.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
    PROFESOR = "Profesor",
    DECANA = "Decana",
}


@Entity()
export class UsuarioEntity {
    
    @PrimaryGeneratedColumn('increment', { type: 'bigint' })
    id: number;

    @Column()
    cedula: number;
    
    @Column()
    nombre: string;
    
    @Column()
    grupodeinvestigacion: string;
    
    @Column()
    numeroextension: number;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.PROFESOR
    })
    rol: string;

    @ManyToOne(() => UsuarioEntity, usuario => usuario.subordinados)
    jefe: UsuarioEntity;

    @OneToMany(() => UsuarioEntity, usuario => usuario.jefe)
    subordinados: UsuarioEntity[];

    @OneToMany(() => BonoEntity, bono => bono.usuario)
    bonos: BonoEntity[];

    @OneToMany(() => ClaseEntity, clase => clase.usuario)
    clases: ClaseEntity[];

}
