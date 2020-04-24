import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {

    @Field()
    description: string;

    @Field()
    createdAt: string;

}