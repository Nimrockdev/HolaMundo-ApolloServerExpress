# GraphQL whith Apollo server  

>In docs you can see that the data can be returned to us in the different queries and mutations. 


## Create 'tsconfig.json'  

`npx tsc --init --rootDir src --outDir build --lib dom,es6 -module commonjs --removeComments --target es6`

## Production dependencies  

`npm install express express-graphql graphql ncp http graphql-import-node compression cors
typescript graphql-tools graphql-playground-middleware-express`  

## Development dependencies  

`npm install @types/compression @types/express @types/cors @types/express-graphql @types/node @types/graphql -D`

## Dependencies for deployment ZEIT  

`npm install graphql-tag-pluck`

Inspect: [https://zeit.co/jsg8405/01-hola-mundo-apollo-server-express](https://zeit.co/jsg8405/01-hola-mundo-apollo-server-express)

Production: [https://01-hola-mundo-apollo-server-express.now.sh/](https://01-hola-mundo-apollo-server-express.now.sh/)
