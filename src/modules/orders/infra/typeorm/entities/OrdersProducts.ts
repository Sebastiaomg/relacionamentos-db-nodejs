import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import Order from '@modules/orders/infra/typeorm/entities/Order';
import Product from '@modules/products/infra/typeorm/entities/Product';

@Entity('orders_products')
class OrdersProducts {
  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  id: string;

  @ManyToOne(() => Order, (order: Order) => order.order_products)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @ManyToOne(() => Product, (product: Product) => product.order_products)
  @JoinColumn({ name: 'id' })
  product: Product;

  @Column()
  product_id: string;

  @Column()
  @Exclude()
  order_id: string;

  @Column('decimal')
  price: number;

  @Column()
  quantity: number;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;
}

export default OrdersProducts;
