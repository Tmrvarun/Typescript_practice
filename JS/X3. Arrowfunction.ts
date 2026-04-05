//function with anonymous names , which means they are not having any name 
// denoted by "()=>"

//function plus(a:number,b:number){
//    return a+b;
//}

let abc= (a:number,b:number):number => a+b ; // we dont need to give any return type here 

//or we can also write

let xyz=(a:number,b:number) =>{ // We give return type as we are defining the statement inside the braces 
    return a*b; 
}

console.log(abc (25,30))
console.log(xyz(5,8))
