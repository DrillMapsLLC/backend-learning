
import { UserModel } from "../../model/User";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User, UserInput, UserUpdate } from "./user.schema";

@Resolver()
export class UserResolver {
    @Query(() => [User])
    async tasks(): Promise<User[] | []> {
        const user = await UserModel.findAll({});
        return user as unknown as User[]
    }

    //Create  user
    @Mutation(() => User)
    async createUser(@Arg("input") input: UserInput): Promise<User> {
        const { name, age, status, createdBy, updatedBy } = input
        const createUser = await UserModel.create({
            name,
            status,
            age,
            createdBy,
            updatedBy
        })
        return createUser as unknown as User
    }

    // update user
    @Mutation(() => User)
    async updateUser(@Arg("id") id: number, @Arg("input") input: UserUpdate): Promise<User> {
        const { name, age } = input
        await UserModel.update(
            {
                name,
                age
            }, {
            where: {
                id
            }
        })

        const user = await UserModel.findOne({
            where: {
                id
            }
        })


        return user as unknown as User
    }


    //delete user
    @Mutation(() => User)
    async deleteUser(@Arg("id") id:number) : Promise<User>{
        const exists = await UserModel.findOne({
            where : {
                id
            }
        })

        if(!exists) {
            throw "User not Found"
        }

        await UserModel.destroy({
            where : {
                id
            }
        })

        return exists as unknown as User
    }

    // get user by id 
    @Query(() => User)
    async userById(@Arg('id') id: number): Promise<User | null> {
        const user = await UserModel.findOne({
            where : {
                id : id
            }
        })

        if(!user) {
            throw "user not found"
        }

        return user as unknown as User
    }
}
