import { ProductRepository } from './product.repository';
import { Product } from './product.entity';
import { CreateProductInput } from './product.input';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    getProducts(): Promise<Product[]>;
    createProduct(createProductInput: CreateProductInput): Promise<Product>;
}
