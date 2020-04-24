import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductInput } from './product.input';
export declare class ProductRepository extends Repository<Product> {
    getProducts(): Promise<Product[]>;
    createProduct(createProductInput: CreateProductInput): Promise<Product>;
}
