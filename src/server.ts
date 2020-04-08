import express from  'express';
import compression from 'compression';
import cors from 'cors';

//import graphQLHTTP from 'express-graphql';

import schema from './schema';
import {ApolloServer} from 'apollo-server-express';
import {createServer} from 'http';

import expressPlayground from 'graphql-playground-middleware-express';


const app = express();

app.use('*', cors());
app.use(compression());

const server = new ApolloServer({
    schema,
    introspection: true
})

server.applyMiddleware({app})

// app.use('/', graphQLHTTP({
//     schema : schema,
//     graphiql: true
// }));

app.use('/', expressPlayground({
 endpoint: '/graphql'
}));

const PORT = 5300;
const httpServer = createServer(app);
httpServer.listen(
    {port:PORT},
    ()=>console.log(`API GraphQL, http://localhost:${PORT}/graphql`)
);




