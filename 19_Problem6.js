const family = [
    { name: "Jack", age: 26 },
    { name: "Jill", age: 22 },
    { name: "James", age: 5 },
    { name: "Jenny", age: 2 }
    ];
function findAge(family){
    const temp= family.filter((Element)=>Element.age>26);
    if(temp.length===0){
        console.log("NO REDORD FOUND");
    }else{
        console.log(temp);
    }
   
}
findAge(family);

function findSpecificStartChar(family,ch){
    const temp= family.filter((element)=>element.name.startsWith(ch));
    if(temp.length===0){
        console.log("NO REDORD FOUND");
    }else{
        console.log(temp);
    }
}
findSpecificStartChar(family,'J');

function findSpecificEndChar(family,str){
    const temp= family.filter((element)=>element.name.endsWith(str));
    if(temp.length===0){
        console.log("NO REDORD FOUND");
    }else{
        console.log(temp);
    }
}
findSpecificEndChar(family,'nny');

function findAllNames(family){
    const temp=family.map((element)=>{
        return element.name;
    });
    
    if(temp.length===0){
        console.log("NO REDORD FOUND");
    }else{
        console.log(temp);
    }
}
findAllNames(family);

function Sorting(family,order){
    if(order==='ASC'){
        console.log(family.sort((a,b)=>a.name.localeCompare(b.name)));
    }
    else if(order==='DESC'){
        console.log(family.sort((a,b)=>b.name.localeCompare(a.name)));
    }
    else{
        console.log("NO RECORD FOUND");
    }
}
Sorting(family,'ASC');