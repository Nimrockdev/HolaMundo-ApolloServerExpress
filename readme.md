
#GraphQL con Grah
##Pare crear el tsconfig.json
npx tsc --init --rootDir src --outDir build --lib dom,es6 --module commonjs --removeComments --target es6

Instalaciones necesarias proyecto

● express
● express-graphql
● graphql
● graphql-import-node
● compression
● cors
● typescript
● graphql-tools
● graphql-playground-middleware-express  

Dependencias de producción:  

`npm install express express-graphql graphql ncp http graphql-import-node compression cors
typescript graphql-tools graphql-playground-middleware-express`  

Dependencias de desarrollo:  

npm install @types/compression @types/express @types/cors @types/express-graphql @types/node @types/graphql -D

##Dependencias para despliegue ZEIT
`npm install graphql-tag-pluck`

