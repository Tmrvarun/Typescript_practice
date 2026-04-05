//javascript is runtime language, that means all inferances and data type conversion /error occurs at runtime of code
// Typescript is Typed javascript, some data types are not present in java script so typscript fulfils the gap
// Type script has syntactic supreset which means it is compiles like java script and gives us advantaage of type safety while compiling 
//type script is compile time language that means all the codes execution,error/type conversions occur at each line 
//Typescript inference and 


let name1:string;
name1='Test type';
console.log(name1);

//anything given in above format ,with ':' in it is called ts annotation

let name2='Test name';
console.log(name2); 

//in the above code the name2 is converted to string only at run time, so ,it is called inference


let a:number;
a=100;
console.log(a);

let a1:boolean =true;
console.log(a1);

function printhello():string {
    return ('Test function')
}


console.log(multi(10,20))
console.log(printhello())

function multi(x:number,y:number):number{
    return x*y;
}

function addition(a1: any,b1: any){
    return a1+b1;

}
