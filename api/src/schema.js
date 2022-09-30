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

    input PetIput{
        name:String,
        type:String
    }

    input ShoesInput{
        brand:String,
        size:Int
    }

    type Shoe{
        brand:String,
        size:Int
    }

    type Query{
        pets(input:PetIput!):[Pet]!
        shoes(input:ShoesInput!):[Shoe]
    }

    input NewShoeInput{
        brand:String,
        size:String
    }

    type Mutation{
        newShoe(input:NewShoeInput!):Shoe!
    }
`;

module.exports = schema