
/*
//The arguments object
function add()
{
    let sum =0;
    for(let a=0; a<arguments.length; a++)
    {   
        sum +=arguments[a];
    }

    return sum;
}

console.log(add(10,20,40));  */


debugger 
var x=10;

function getName()
{
    console.log("Javscript Hoisting...");
}

// Memory allocated to all 
getName();
console.log(x);
console.log(getName);