// import "reflect-metadata";
import { getIntrospectionQuery, buildClientSchema, printSchema } from 'graphql'
import fs from "fs"
import apolloServer from '../../prisma/server';

const startServer = apolloServer.start();
const gqlSchemaFile = './prisma/schema.graphql';
export default async function handler(req, res) {

    await startServer;
    await apolloServer.createHandler({
        path: "/api/graphql",
    })(req, res);
 
    if (!fs.existsSync(gqlSchemaFile)) {
        // Generate 'schema.graphql'
        console.log(`Generate 'schema.graphql'...`);
        const { data } = await apolloServer.executeOperation({ query: getIntrospectionQuery() })
        const schema = buildClientSchema(data)
        fs.writeFileSync('./prisma/schema.graphql', printSchema(schema), 'utf8');
        console.log(`Done! 'schema.graphql' generated.`);
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
};