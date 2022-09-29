module.exports = {
   Query:{
        pets(_,__,{models}){
            const response=models.Pet.findMany();      
            return [];
        }
   }
}
