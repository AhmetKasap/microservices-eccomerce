import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PaymentEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number

  @Column()
  cardName: string

  @Column()
  cardNumber: string

  @Column()
  cardCvv : string

  @Column()
  cardMonthDate : string

  @Column()
  cardYearDate : string
 
}