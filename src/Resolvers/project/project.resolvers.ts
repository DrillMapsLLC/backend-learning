
import { ProjectModel } from "../../model/project";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { project, ProjectInput, ProjectUpdate} from "./project.schema";

@Resolver()
export class ProjectResolver {
    @Query(() => [project])
    async project(): Promise<project[] | []> {
        const project = await ProjectModel.findAll({});
        return project as unknown as project[]
    }

    // create project
    @Mutation (() => project) 
    async createProject(@Arg ("input") input: ProjectInput): Promise <project>{
    const {name,description,clientName,projectValue,year} = input 
    const createClient =  await ProjectModel.create({
        name,
        description,
        clientName,
        projectValue,
        year
    })
    return createClient as unknown as project
}

// update project
@Mutation (() => project)
async updateProject (@Arg("id") id:number,@Arg("input") input: ProjectUpdate): Promise <project | null> {
    const {name,clientName,projectValue} = input
      await ProjectModel.update({
        name,
        clientName,
        projectValue
      }, {
        where : {
            id
        }
      })

      const project =  await ProjectModel.findOne({
        where : {
            id
        }
      })

      return project as unknown as project

}

// delete project
@Mutation(() => project)
    async deleteProject(@Arg("id") id:number) : Promise<project | null >{
        const exists = await ProjectModel.findOne({
            where : {
                id
            }
        })

        if(!exists) {
            throw "project not Found"
        }

        await ProjectModel.destroy({
            where : {
                id
            }
        })

        return exists as unknown as project
    }


}