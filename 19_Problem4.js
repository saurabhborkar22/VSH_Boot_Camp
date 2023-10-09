const users = [
    {
    id: 2,
    name: "Jonathon Haley",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    ages:34
    },
    {
    id: 3,
    name: "Dean John",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    ages:23
    }
    ];

function  addLast(users,temp){
    let promise=new Promise((resolve,reject)=>{
        let a=[...users];
       if(!a.push(temp)) {
            reject("NO RECORD FOUND");
       }
       else{
        resolve(a);
       }
        
    });
    promise.then((result)=>{
       
        console.log(result);
    })
    .catch((error)=>{
        
        console.log(error)
    })
}
const temp={
    id: 4,
    name: "saurabh borkar",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "saurabh_password",
    ages:34
    };
addLast(users,temp);


function addFirst(users,temp){
    let promise=new Promise((resolve,reject)=>{
        let a=[...users];
        if(!a.unshift(temp)) {
            reject("NO RECORD FOUND");
       }
       else{
        resolve(users);
       }
        
    });
    promise.then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error)
    })
}
const temp1={
    id: 1,
    name: "saurabh borkar",
    username: "ssb1.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "1saurabh_password",
    ages:34
    };
addFirst(users,temp1);


function display(users){
    let promise = new Promise((resolve,reject)=>{
        let temp=users.map((user)=>{
            
            return user.id,user.name,user.username;
        });
        
        if(temp.lenght===0){
            reject("NO DATA FOUND");
        }
        else{
            resolve(temp);
        }
    });
    promise.then((result)=>{
        console.log(result);
    })
    promise.catch((error)=>{
        console.log(error);
    })
}
display(users);

function findNameEquals(users){
    let promise = new Promise(function(resolve,reject){
        const temp= users.filter((element)=> element.name==='demon');
        if(temp.length === 0){
            reject("NO RECORDS FOUND");
        }
        else{
            resolve(temp);
        }
    },1000);
    promise.then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })
}
findNameEquals(users);

function findSpecificStartChar(users,ch){
    let promise =new Promise(function(resolve,reject){
        const temp= users.filter((element)=>element.name.startsWith(ch));
        if(temp.length===0){
            reject("NO RECORD FOUND");
        }
        else{
            resolve(temp);
        }
    });
    promise.then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })
}
findSpecificStartChar(users,'J');

function findSumAges(users){
    let promise= new Promise(function(resolve,reject){
        const temp= users.reduce((total,cur)=>{
            return total+cur.ages;
        },0);
        if(temp.length===0){
            reject("NO RECORD FOUND");
        }
        else{
            resolve(temp);
        }
    })
    promise.then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    });
}

findSumAges(users);

function findAll(users){
    let promise = new Promise(function(resolve,reject){
        const temp= users.map((user)=>{
            return user.name+" "+user.ages;
        });
        if(temp.length===0){
            reject("NO RECORD FOUND");
        }
        else{
            resolve(temp);
        }
    });
    promise.then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })
}
findAll(users);

function  findNameAges(users,ch){
    let promise=new Promise(function(resolve,reject){
        const temp= users.filter((element)=> element.name.startsWith(ch));
        if(temp.length===0){
            reject("NO RECORDS FOUND");
        }
        else{
            
            resolve(temp);
        }
    },1000)
    promise.then((result)=>{
        let promise1= new Promise(function(resolve,reject){
            const sum= result.reduce((total,cur)=>{
                return total+cur.ages;
            },0)
            if(sum.length===0){
                reject("NO RECORDS FOUND");
            }
            else{
              
                resolve(sum);
            }
        },1000)
        promise1.then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log(error);
        })
        
    })
    .catch((error)=>{
        console.log(error);
    })
}
findNameAges(users,'J')
