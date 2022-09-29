const gql = require("graphql-tag")

const schema = gql`
    type User{
        name:String!,
        id:ID
    }

    type Pet{
        id:ID!,
        name:String!
    }

    type Query{
        pets:[Pet]!
    }
`;

module.exports = schema