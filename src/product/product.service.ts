import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { Product } from './product.entity';
import { CreateProductInput } from './product.input';

@Injectable()
export class ProductService {

    constructor(
      @InjectRepository(ProductRepository)
      private readonly productRepository: ProductRepository  
    ){}

    async getProducts(): Promise<Product[]> {
        return this.productRepository.getProducts()
    } 

    async createProduct(createProductInput: CreateProductInput) : Promise<Product> {
        return this.productRepository.createProduct(createProductInput)
    }
}
