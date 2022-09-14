//VS code
//Step 01 : install Nodejs https://nodejs.org/en/download/         // open the terminal 
//step 02 : Type Script install: npm install -g typescript         // tsc --version
//step 03 : make Folder/directory :like E:\Bloackchain\TypeScript
//step 04 : Open the folder in VS Code 
//step 05 : Make file into the folder tsClass01.ts
//step 06 : create a function
/*
function add()
{
    console.log("Welcome to Type Script");
}

add();
*/
// click on terminal Type (cmd command: to change the PS into CMD mode)
//step 07 : for compiling  tsc tsClass01.ts (it create another file that have .js extension tsClass01.js)
// compile for the checking of errors
//step 08 : Run the file  node tsClass01.js (it create another file that have .js extension tsClass01.js)
// to show the output
//step 09 : add tsconfig.json
//types : Datatypes : number, null undefined string boolean
var fname = "Alisha";
var lname = "khan";
var rv = Math.random() < 0.05 ? fname : lname;
console.log(rv);
//console.log(Math.random());
//console.log(Math.random());
//console.log(Math.random());
//console.log(Math.random());
//console.log(Math.random()>0.05 ?fname:lname);
