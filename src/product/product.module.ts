import { Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([ProductRepository])
  ],
  providers: [ProductResolver, ProductService]
})
export class ProductModule {}
