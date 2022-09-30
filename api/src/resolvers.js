module.exports = {
   Query:{
        pets(_,__,{models}){
            const response=models.Pet.findMany();      
            return response;
        }
   },
   Pet:{
    id(){
        return 'this-is-updated-id'
    },
    image(pet){
        return pet.type==='dog'?'dog-image':'cat-image';
    }
   }
}
