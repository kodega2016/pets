const gql=require("graphql-tag")

const schema=gql`
    type User{
        name:String!,
        id:ID
    }
    type Query{
        me:User!
    }
`;

module.exports=schema