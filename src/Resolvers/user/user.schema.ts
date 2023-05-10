
import { Length } from "class-validator";
import { Field, InputType, Int, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field(() => Int)
    id: number

    @Field({nullable: true})
    name: string

    @Field({nullable: true})
    age: number

    @Field({nullable: true})
    department: string

    @Field({nullable: true})
    status: string

}


@InputType()
export class UserInput {
    @Field()
    @Length(0,22)
    name!: string
    @Field()
    age! : number
    @Field()
    status!: string
    @Field()
    createdBy!: number
    @Field()
    updatedBy!: number 
    

}
@InputType()
export class UserUpdate {
    @Field()
    @Length(0,22)
    name!: string
    @Field()
    age! : number  

}
