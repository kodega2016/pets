const gql = require("graphql-tag")

const schema = gql`
    type User{
        name:String!,
        id:ID
    }
    type Post{
        title:String!,
        body:String
    }
    type Query{
        me:User!
        getPosts:[Post]!
        getFriends:[User!]!
    }
`;

module.exports = schema