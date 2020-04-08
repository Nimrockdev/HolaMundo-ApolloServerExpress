import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import 'graphql-import-node';
import resolvers from './../resolvers/resolversMaps';
import typeDefs from './schema.graphql';


const schema:  GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
}) ;

export default schema;