### Simple Application using Node js,GraphQL and lowdb
### for learning purposes

query data with arguments
```# {
{
  pets(input:{}){
    id
    name
  },
  shoes(input:{}){
    brand
    size
  }
}

```

mutate data
```
mutation{
  newShoe(input:{
    brand:"Nike",
    size:"12"
  }){
    brand
    size
  }
}
```

enum data type
```
enum ShoeType{
  NIKE
  JORDAN
  CALIBER
}

mutation{
  newShoe(input:{
    brand:NIKE,
    size:"12"
  }){
    brand
    size
  }
}

```