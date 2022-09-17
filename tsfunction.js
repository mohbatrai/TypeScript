/*
function show(song : string)
{
    console.log(`Singer: ${song}`);
}
show("My heart is feeling worries....");


//let nums:number[] =[1,2,3,4,5];


function rateSong(song:string, rating=0)
{
    console.log(song+" gets "+rating+" /5 stars!");
}
rateSong("Photograph"); // Ok
rateSong("Set Fire to the Rain", 5); // Ok
rateSong("Set Fire to the Rain", undefined); // Ok

//rateSong("At Last!", "100");

function getAverage(...avg: number[])
{
//var output = avg.reduce(function (a,b){ return a+b;},0)
return avg.reduce(function (a,b){ return a+b;},0)/avg.length;
}

console.log("The average of the given number is = "+getAverage(10,20,30));

function Job(title : string, ...person:string[])
{
    return person.join(", ")+" are "+title;
}
console.log(Job("Software Engineer","ali","Jhon","Michle","Smith"));

// rest parameter must be used as a last parameter of function
function Job( ...person:string[],title : string)
{
    return person.join(", ")+" are "+title;
}

console.log(Job("Jhon","Michle","Smith","Software Engineer","ali",));



function getDays(days :string[]):number
{
    for(var d of days)
    console.log(d+"day");
     
    return days.length;
}
var input:string[] = ["Mon","Tues","Wednes","Thurs","Fri","Sun"]
//console.log(getDays(input));

console.log(getDays(["Mon","Tues","Wednes","Thurs","Fri","Sun"]));


    //callback function are also called Higher called functions



function add(a:number,b:number, cbPrettyprint)
{
    cbPrettyprint("Result :: "+(a+b));
}

function preetyPrint(val:string)
{
    console.log(`=======================`);
    console.log(val);
    console.log(`=======================`);
}

add(4,5,preetyPrint);


function getOdd(num:number)
{
 return num % 2 !=0;
}

function getEven(num:number)
{
 return num % 2 ==0;
}

function filter(num:number[],cbOdd) {
    
 let res:number[]=[];
    for(var a of num)
    {
        if(cbOdd(a))
        res.push(a);
    }
    return res;
}

var output:number[]=filter([1,2,3,4,5,6,7,8,9,10,11,13,15],getEven);
console.log(output);

// Function return Types : Every function in implicitly returns "undefined" unless you explicitly specify a return value.
function say(messgae:string)
{
    console.log( messgae);
     return messgae;
}

let msg = say("Welcome to undefined return Type");
console.log("Result: "+msg);

function say(a: number,b:number) : string |number
{
    if (a<10)
   return a+b;
   else
    return a+" + "+b+" = "+(a+b);
}

console.log(`Result = `+say(5,12));


//Optional Parameters:The parameters that may or may not receive a value can be appended with a '?' to mark them as optional.
//Default Parameters :it must follow the required parameters in the function signature =
//

// The arguments object

function add()
{
    let sum:number =0;
    for(let a:number=0; a<arguments.length; a++)
    {
        sum +=arguments[a];
    }

    return sum;}

console.log(add(10,20,40)); // Typescript not supported argument Objects


//hoisting :pronounce hoy-stuhng : The function hoisting allows you to call a function before declaring it.

showMe();
//console.log(a);

var a =10;

function showMe()
{
console.log("Iam Hoisting call function....")    ;
}

//Returning functions from functions

let product =[
                {name:'iphone', price:9000},
                {name:'laptop', price:80000},
                {name:'watch', price:100}

];

console.log('Product store by name');
console.table(product);


//Anonymous Function:the function itself does not have a name and it is one which has defined as an expression

Anonymous(function as a value)			                    	Normal
-does not have any name associated with it		    --It has the particular nam
--is not accessible after its initial creation, 	--It cab be access directly by calling the function name
  it can only be accessed by a variable it is
  stored in as a function as a value.
--It is useful for creating IIFE			        --This function is useful for all scenarios.
 (Immediately Invoked Function Expression).
--It is not hoisted function				        --it is hoisted function

//syntax    (function() { ...code });


let a = function (){
    console.log( "Iam anonymous function.... "); }

console.log(a());

let display = function() {
    return "Anonyoumns...!";
}
console.log(display());



const firstName = "John";
const lastName = "Doe";
(function(){
     console.log(firstName, lastName)
}) (firstName, lastName); // wrong not possible




let nums  = (function (num:number[]) {
    let vRes :number[]= [];
   for (let x=0; x<num.length; x++)
    {
        if(num[x]%2 === 0)
        vRes.push(num[x]);
    }
    return vRes;
})
console.log(nums([1,2,3,4,5,6,7,8,9,10]));


let pNum= (function(num:number){
    let oRes:number[] =[];
    for(let i=1; i<num;i++)
    {
        let counter:number=0;
        for(let j=1;j<num; j++)
        {
            if(i%j===0)
                counter++;
        }
        if(counter===2)
        oRes.push(i);
    }
    return oRes;
})
console.log(pNum(100));


let pStar= (num:number)=>{
    let str;
    for(let i=0;i<num; i++)
    {
        for(let j=0; j<i; j++)
        {
        str+="*";
        }
        str+="\n";
        
    }
    return str;
}

console.log(pStar(10));


let pStar= (num:number)=>{
    let str="\n";
    for(let i=num;i>0; i--)
    {
        for(let j=0; j<i; j++)
        {
        str+="*";
        }
        str+="\n";
        
    }
    return str;
}

console.log(pStar(10));


let pStar= (num:number)=>{
    let str="\n";
    for(let i=num;i>0; i--)
    {
        //sapce
        for(let j=0; j<num-i; j++)
        {
        str+=" ";
        }

        for(let j=0; j<i; j++)
        {
        str+="*";
        }
        str+="\n";
        
    }
    return str;
}

console.log(pStar(10));

let pStar= (num:number)=>{
    let str="\n";
    for(let i=num;i>0; i--)
    {
        //sapce
        for(let j=0; j<num-i; j++)  // n-i
        {
        str+=" ";
        }

        for(let j=0; j< 2*i-1; j++) // 2*i-1
        {
        str+="*";
        }
        str+="\n";
        
    }
    return str;
}

console.log(pStar(10));


let pStar= (num:number)=>{
    let str="\n";
    for(let i=0;i<num; i++)
    {
        //sapce
        for(let j=0; j<num-i; j++)  // n-i
        {
        str+=" ";
        }
        for(let j=0; j< 2*i-1; j++) // 2*i-1
        {
        str+="*";
        }
        str+="\n";
    }
    return str;
}

console.log(pStar(10));


let pStar= (num:number)=>{
    let str="\n";
    for(let i=0;i<num; i++)
    {
        //sapce
        for(let j=0; j<num-i; j++)  // n-i
        {
        str+=" ";
        }
        for(let j=0; j< 2*i-1; j++) // 2*i-1
        {
        str+="*";
        }
        str+="\n";
    }
    for(let i=num;i>0; i--)
    {
        //sapce
        for(let j=0; j<num-i; j++)  // n-i
        {
        str+=" ";
        }

        for(let j=0; j< 2*i-1; j++) // 2*i-1
        {
        str+="*";
        }
        str+="\n";
        
    }

    return str;
}

console.log(pStar(10));



// Never Returns

function fail(msg:string):never
{
    throw new Error("Invalid format: "+msg);
}

function TypeCheck(param:unknown)
{
    if(typeof param !== "string")
    fail("Paramater type string is not matching "+param)   ;
}

console.log(TypeCheck(2344));


function myReturn()
{
  //  return true;
}
console.log(myReturn());

function apiError(msg,code):never
{
    throw {message:msg,code:code}
   // console.log("Hi this is never call ");
   
}

//console.log(apiError("server side error",500));
console.log(apiError("server not found",404));

function add(a:string, b:string):string;
function add(a:number, b:number): number;
function add(a: any, b:any): any {
    return a + b;
}

console.log(add("Hello ", "Steve")); // returns "Hello Steve"
console.log(add(10, 20)); // returns 30

*/
function add(a, b) {
    return a + b;
}
console.log(add("Tyescript", " Function Overload"));
console.log(add(404, " Page wast not found."));
console.log(add(44, 20));
