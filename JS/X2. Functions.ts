//Functions- group of code that perform particular task 
// Void and return functions
// unnamed functions

function getinfo(){
    console.log("Hello functions")
}

getinfo() // since no value is returned so it is void function

function sum(a:number,b:number){
    return(a+b); //return type function
}
let c=sum(10,30); // since the return type is number so it is stored in c
console.log(c)

function mul(a:number,b:number):number{ // a, b are function parameters
    return a*b;
}

let j:number=mul(20,40) //20 and 40 are funcion arguments , this is call by value method

//boolean function

function isname(name:string):boolean{
    if (name==='Varun'){
        console.log("Name is correct");
        return true;
    }
    else if(name==='Tom'){
        console.log("Name is tom");
        return false;
    }
    else{
        console.log("Wrong name");
        return false;
    }
}

//if(isname('Varun')){
 //   console.log('True')
//}

isname('Peter')

// function with variable as function name

let k=function():void{
    console.log("Test function call")
    return;
}
k() // here name of function is not given , a variable denotes the function and it is called here , if () not given then function not called here

let l=function(s:number,d:number):number{
    return s-d;
}
let d=l(50,40)
console.log(d)
