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
    //Q.1  Write a function to add a new record at the end of array users using spread operator,functions : addLast(users,temp)
    function addLast(users,temp){
        let a=[...users];//spread oprator
        a.push(temp);//push will add element in last
       
        console.log("problem no. 1- ID-4 will add at the last of the array")
        console.log(a);
        
    }
    const temp=[{id: 4,
        name: "demon",
        username: "demon.Weber2",
        email: "Demon21@yahoo.com",
        phone: "1-123-321-1234 x11708",
        website: "saurabh.net",
        password: "demon_password",
        ages:24}];
    
    addLast(users,temp);

    
    
//Q2. Write a function to add a new record at the begining of array users using spread operator,

    function addFirst(users,newUser1){
        users.unshift(newUser1);//unshift will add element in start
       
        console.log("problem no. 2- ID-1 will add at the starting of array")
        console.log(users);
    }
    const newUser1={id: 1,
        name: "demon",
        username: "demon.Weber1",
        email: "Demon11@yahoo.com",
        phone: "1-123-321-1234 x11708",
        website: "saurabh.net",
        password: "demon1_password",
        ages:24};
     addFirst(users,newUser1);
 
//Q3. Write a function to display all records only 3 fields id,name,username.
function display(users){
    console.log("problem no. 3 All Records (id,name,username)")
    users.map((user)=>{//user variable has each property of obj
        console.log("ID = "+user.id);
        console.log("Name = "+user.name);
        console.log("Username ="+user.username);
    })
}
display(users);

//Q4. Write a function which will display all records with name ==='demon'
function findNameEquals(users){
    console.log("problem no. 4 all records has name='demon' ")
    let temp="demon";
    const namefind = users.filter((user)=>user.name===temp);
    
       if(!namefind){
        console.log("no record found");
       }else{
        console.log("Output with similer name 'demon' is:- ");
        console.log(namefind);
       }
}
findNameEquals(users);

//Q.5 Write a function which will display all the records starting with name 'B' or any character passed as parameter.
function findSpecificStartChar(users,temp){
    const check=users.filter((user)=> {
        const userName= user.name.toLowerCase();
        temp=temp.toLowerCase();
        return userName.startsWith(temp);//to check starting char
    });
    if(!check){
        console.log("record not found");
    }
    else{
        console.log("problem no. 5 all records with name start from 'B' char ")
        console.log("Output has starting name char 'B' is:- ");
        check.forEach(user => {
            console.log(user);
        });
    }
}
findSpecificStartChar(users,'D');

//Q6. Write a function which will display sum of all ages.
function  findSumAges(users) {
    const sum=users.reduce((total,user)=>{
       return total+user.ages;
    },0);
    console.log("problem no. 6 Sum of All ages ")
    console.log("sum of ages are:- "+sum);
}
  
findSumAges(users);

//Q7 Write a function which will display all the records with only name & ages.
function findAll(users){
    console.log("problem no. 7 All records display with (name and Ages)");
    users.map((user)=>{
        console.log("Name = "+user.name);
        console.log("Ages = "+user.ages);
    })
}
findAll(users);

//Q8. Write a function to display sum of all ages of records having name starting with 'J'
function findNameSumOfAges(users,temp){
    const check=users.filter((user)=> {
        const userName= user.name.toLowerCase();
        temp=temp.toLowerCase();
        return userName.startsWith(temp);
    });
    if(!check){
        console.log("record not found");
    }
    else{
        console.log("problem no. 8 All REcords havinf name start with'J' and sum of there ages");
        const sum=check.reduce((total,user1)=>{
            return total+user1.ages;
        },0);
        console.log("sum of ages that user name starts from J "+sum);
    }
}
findNameSumOfAges(users,'D');

//Q.9 Write a function which will display all the records in sorting according to names.
function Sorting(data,order){
    console.log("problem no. 9 Records in sorting(ASC/DESC)")
    if(order==='ASC'){
        data.sort((a,b)=>a.name.localeCompare(b.name));
    }else if(order==='DESC'){
        data.sort((a,b)=>b.name.localeCompare(a.name));
    }else{
        console.log("invalid paramiter");
    }
    data.forEach((user)=>{
        console.log(user);
    });
}
Sorting (users,'ASC');

//Q10 Delete an object with specific array index.
function deleteRecord(users,index){
    users.splice(index,1);
    console.log("problem no. 10 Delete specific record")
    console.log(users);
}
deleteRecord(users,1);

//Q11. Insert an object at specific array index.
function InsertRecord(users,newUser,index) {
    users.splice(index,0,newUser);
    console.log("problem no. 11 Add Record in specific index")
    console.log(users);
}
const newUser2=[{id: 4,
    name: "demon",
    username: "demon.Weber2",
    email: "Demon21@yahoo.com",
    phone: "1-123-321-1234 x11708",
    website: "saurabh.net",
    password: "demon_password",
    ages:24}];
InsertRecord(users,newUser2,1);
