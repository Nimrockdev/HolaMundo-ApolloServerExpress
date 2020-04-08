#GraphQL whith Apollo server  

##Create 'tsconfig.json'  

`npx tsc --init --rootDir src --outDir build --lib dom,es6 -module commonjs --removeComments --target es6`



##Production dependencies  

`npm install express express-graphql graphql ncp http graphql-import-node compression cors
typescript graphql-tools graphql-playground-middleware-express`  

##Development dependencies  

`npm install @types/compression @types/express @types/cors @types/express-graphql @types/node @types/graphql -D`

##Dependencies for deployment ZEIT  

`npm install graphql-tag-pluck`

Inspect: [https://zeit.co/jsg8405/01-hola-mundo-apollo-server-express/e9zil4h](https://zeit.co/jsg8405/01-hola-mundo-apollo-server-express/e9zil4h) 

Production: [https://01-hola-mundo-apollo-server-express.now.sh](https://zeit.co/jsg8405/01-hola-mundo-apollo-server-express/e9zil4h) 
