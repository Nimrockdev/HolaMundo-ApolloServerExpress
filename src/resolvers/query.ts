import {IResolvers} from "graphql-tools";

const query : IResolvers = {
    Query : {
        hola(): string{
            return 'Hola Mundo';
        },
        holaConNombre(__:void, {nombre}): string{
        return `Hola Mundo ${nombre}!!`;
        },
        holaGraphQL(): string {
            return 'holaGraphQL';
        }
    }
}

export default query