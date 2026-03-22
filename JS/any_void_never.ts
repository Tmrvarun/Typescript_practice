//any keyword variable can hold or assign any type of variable

let variable:any=1123;
variable='try';
variable=true;

let array1:any[]=["Test",1234,false]

function fnc(a:number,b:number):any{
    if (a>b){
        return 123;
    }
    else if (a<b){
        return 'Hello string';
        }
        
}
let res=fnc(500,200);
console.log(res)


//Void

let help:void=undefined;

//let help1:void=123; // error as void can hold only undefined 

function check(abc:string):void{ //return type of this function is void, so it does not return any value, a blank return can appear 
    console.log(abc)
}
check('Hello world')

//Never : this keyword is used if we want our function to not return any value or not let our function to happen
//it cant hold any undefined or null value

function nvr():never{

    while (true)
    {
        console.log("Hello taj hpotel")
    }
} // infinite loop with never keyword
