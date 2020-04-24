import { Repository, EntityRepository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { Product } from './product.entity';
import { CreateProductInput} from './product.input';
import { v4 as uuid } from 'uuid';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

    async getProducts(): Promise<Product[]> {
        return this.find();
    }

    async createProduct(createProductInput: CreateProductInput): Promise<Product> {
        const {
            description,
            createdAt, 
        } = createProductInput;

        const product = this.create({
            id: uuid(),
            description,
            createdAt
        })

        return this.save(product);
    }
}