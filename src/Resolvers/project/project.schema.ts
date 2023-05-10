import { Length } from "class-validator";
import { Field, InputType, Int, ObjectType } from "type-graphql";

@ObjectType()
export class project{
    @Field(() => Int)
    id: number

    @Field({nullable: true})
    name: string

    @Field({nullable: true})
    description: string

    @Field({nullable: true})
    clientName: string

    @Field({nullable: true})
    projectValue: number

    @Field({nullable: true})
    year: number

}

@InputType()
export class ProjectInput {
    @Field()
    @Length(0,50)
    name! : string
    @Field()
    description! : string
    @Field()
    clientName! : string
    @Field ()
    projectValue: number
    @Field()
    year!: number
}

@InputType()
export class ProjectUpdate {
    @Field()
    name! : string
    @Field()
    clientName! : string
    @Field ()
    projectValue: number
}


@InputType()
export class ProjectDelete {
    @Field ()
    projectValue: number
    
}
