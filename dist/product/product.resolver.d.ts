import { ProductService } from './product.service';
import { CreateProductInput } from './product.input';
export declare class ProductResolver {
    private readonly productService;
    constructor(productService: ProductService);
    products(): Promise<import("./product.entity").Product[]>;
    createProduct(createProductInput: CreateProductInput): Promise<import("./product.entity").Product>;
}
