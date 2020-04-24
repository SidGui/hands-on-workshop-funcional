import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType('Product')
export class ProductType {

    @Field(type => ID)
    id: string;

    @Field()
    description: string;

    @Field()
    createdAt: string;

    @Field()
    updatedAt: string;
}