const gql = require("graphql-tag")

const schema = gql`
    type User{
        name:String!,
        id:ID
    }

    type Pet{
        id:ID!,
        createdAt:String,
        name:String!,
        type:String!
        image:String!
    }

    type Query{
        pets:[Pet]!
    }
`;

module.exports = schema