const { ApolloServer } = require("apollo-server")
require("colors")

const typeDefs = require("./schema")
const resolvers = require("./resolvers")

const { models,db } =require('./db/index')


const PORT = 4000;
const server = new ApolloServer({
    typeDefs, resolvers,context:()=>{
        return {
            models,db
        }
    }
});

server.listen(PORT, () => {
    console.log(`server is running on ${PORT}`.bgGreen)
});

process.on("unhandledRejection", (e) => {
    console.log(`Server Halted:${e.message}`.bgRed);
    server.close();
    process.exit(1)
})