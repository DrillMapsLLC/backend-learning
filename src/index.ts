import 'reflect-metadata';
import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql'
import { UserResolver } from './Resolvers/user/user.resolvers';
import db from './config/db';
import { ProjectResolver } from './Resolvers/project/project.resolvers';


const main = async () => {

    const schema = await buildSchema({
        resolvers: [UserResolver,ProjectResolver],
        validate: false,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    });

    const apolloServer = new ApolloServer({
        schema,
        plugins: []
    });

    await apolloServer.start()

    const app = express();
    
	db.sync({force: true})
    .catch(err => {
        console.log(err)
    })

    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log("server started on http://localhost:4000/graphql");
    })
}

main();
