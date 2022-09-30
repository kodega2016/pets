module.exports = {
    Query: {
        pets(_, { input }, { models }) {      
            console.log(input)     
            const response = models.Pet.findMany();
            return response;
        },
        shoes(_,{input},{models}){
            console.log(input);
            return [
                {
                    "brand":"Nike",
                    "size":25
                },
                {
                    "brand":"Caliber",
                    "size":30
                }
            ];
        }
    },
    Pet: {
        id() {
            return 'this-is-updated-id'
        },
        image(pet) {
            return pet.type === 'dog' ? 'dog-image' : 'cat-image';
        }
    },

    Mutation:{
        newShoe:(_,{input})=>{
            console.log(input)
            return input;
        }
    },
    Shoe:{
        __resolveType: obj => {
          
            return {}
          }
    }
}
