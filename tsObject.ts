/*
function Calc(num1: number, num2: number,oper:"+"|"-" |"/"|"*")
{
let result:number;
switch(oper)
{
    case "+":
        result= num1 +num2;     
        break;
    case "-":
     result= num1 -num2;     
     break;
     case "*":
        result= num1 * num2;     
       break;
    case "/":
        result= num1 / num2;     
        break;
    default:
    result = 604;
 
}
return result;
}

console.log(Calc(44,55,"+"));
console.log(Calc(44,55,"-"));
console.log(Calc(44,55,"/"));
console.log(Calc(44,55,"*"));
//console.log(Calc(44,55,"x"));




let employ ={
    fname:"Type",
    laname:"script",
    models:2022,
    chapter:"objects"
}
console.log(employ.fname);

type vehicle={cname:string,model:number,color:string, isready:boolean}

let vehicle:{
        cname:"Mehran",
        model:2022,
        color:"red"
    };



//nested objects

type poem= {
    pname:string;
    author:{
        Aname:string,
        isbn:number,
        titl:string
    };
}
let p:poem = {
pname:"My litle garden",
author:{
    Aname:"Michle ben",
    isbn:202020202,
    titl:"Sweet rose with pleasent air"
}
}

console.log(p);




type employee ={
    fname?:string,
    lname:string,
    salary:number;
    crendential:{
        username:string,
        password:string
    };
}

let emp:employee = {
    //fname:"Mohbat",
    lname:"rai",
    salary:993,
    crendential:{
        username:"mrai",
        password:"1233sd"
    }
}
console.log(emp);

let emp11:employee={
fname:"JavaSript",
lname:"book",
salary:4555,
crendential:{
username:"book1",
password:"book23"
}
}

console.log(emp11);




type poemwithpage ={
    name:string,
    page:number
};

type poemwithRyhme ={
    name:string,
    ryhme:boolean
};

type poem = poemwithpage | poemwithRyhme;

let op= Math.random()>0.05 
                    ?{name :"My Book Name is TS",pages:23}
                    :{name:"My book names TS2", ryhme:true}

//op.pages=44;
//op.ryhme=false;
console.log(op);
*/

type car ={
    model:string,
    color:string,
    tyre:number,
    ndoor:number
}

type bike ={
    model:string,
    color:string,
    tyre:number,
    kick:boolean
}

type honda = car|bike;

//let cd= Math.random()>0.005 
  //  ?{module:2022,clor:"Silver",tyre:4,ndoor:4}
    //:{module:2021,clor:"red",tyre:2,kick:true};
//   console.log(cd);

let cd1= {module:2022,clor:"Silver",tyre:4,ndoor:4};
let cd2={module:2021,clor:"red",tyre:2,kick:true};


function show(val1:honda)
{
    if(typeof val1 ==="string"  ||typeof val1 ==="string" || typeof val1 ==="number"  )
    console.log(val1);
    else if(typeof val1 ==="string"  ||typeof val1 ==="string" || typeof val1 ==="boolean"  )
    console.log(val1);
}

console.log (cd1);