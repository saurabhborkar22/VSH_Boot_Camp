const data = [
    {name: "Butters", age: 3,type: "dog" },
    {name: "Lizzy", age: 6, type: "dog"},
    {name: "Red", age: 1, type: "cat" },
    {name: "Joey",age: 3, type: "dog" }
    ]

function findAllDogs(data){
    const temp= data.filter((element)=>element.type==='dog');
    if(temp.length===0){
        console.log("NO REDORD FOUND");
    }else{
        console.log(temp);
    } 
}
findAllDogs(data);

function findSpecificStartChar(data,ch){
    const temp = data.filter((element)=>element.name.startsWith(ch));
    if(temp.length===0){
        console.log("NO REDORD FOUND");
    }else{
        console.log(temp);
    }
}
findSpecificStartChar(data,'J')

function findSumAges(data){
    const temp= data.reduce((total,cur)=>{
        return total+cur.age;
    },0)
    if(temp.length===0){
        console.log("NO REDORD FOUND");
    }else{
        console.log(temp);
    }
    }
    
findSumAges(data);

function findAll(data){
     const temp=data.map((element)=>{
        return element.name,element.age;
     })
     if(temp.length===0){
        console.log("NO REDORD FOUND");
    }else{
        console.log(temp);
    }
}
findAll(data);

function sumOfAgesOfAllDog(data){
    const temp=data.filter((element)=>element.type==='dog');
    if(temp.legth===0){
        console.log("NO RECORD FOUND");
    }
    else{
        const sum= temp.reduce((total,cur)=>{
            return total+cur.age;
        },0);
        console.log(sum);
    }
    
    
}
sumOfAgesOfAllDog(data);

function Sorting(data,order){
        if(order==='ASC'){
           console.log( data.sort((a,b)=>a.name.localeCompare(b.name)));
        }
        else if(order==='DESC'){
            console.log(data.sort((a,b)=>b.name.localeCompare(a.name)));
        }
        else{
            console.log("UNdefine");
        }
}
Sorting(data,'DESC');