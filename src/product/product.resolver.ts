import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductType } from './product.type';
import { ProductService } from './product.service';
import { CreateProductInput } from './product.input';

@Resolver(of => ProductType)
export class ProductResolver {

    constructor(
        private readonly productService: ProductService
    ){

    }

    @Query(returns => [ProductType])
    products() {
        return this.productService.getProducts();
    }

    @Mutation(returns => ProductType)
    createProduct(@Args('createProductInput') createProductInput: CreateProductInput) {
        return this.productService.createProduct(createProductInput);
    }
}
