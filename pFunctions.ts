
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

*/
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