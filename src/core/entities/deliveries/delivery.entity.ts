import { Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Transaction } from '../transactions/transaction.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Delivery {
    @PrimaryGeneratedColumn()
    @ApiProperty({readOnly: true, type: 'integer'})
    id: number;

    @OneToOne(() => Transaction, transaction => transaction.delivery)
    @JoinColumn()
    @Exclude()
    transaction: Transaction;

    @Column()
    @ApiProperty()
    address: string;

    @Column()
    @ApiProperty()
    status: string;
}
