import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @Column()
    createdAt: string;

    @Column()
    updatedAt: string;

}