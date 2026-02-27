// we can achive this by :
// when function have same name
// parameter number are same
// parameter types can be different

// function implementation/prototype

function adding(a:number,b:number):number ;
function adding(a:string,b:string):string;
function adding(a:boolean,b:boolean):boolean;

// function declaration , need to be done only once

function adding(a:any,b:any){
    return a+b
}

console.log(adding(10,20))
console.log(adding('Hello','World'))
console.log(adding(true,false))