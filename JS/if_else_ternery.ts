let n:boolean=true;

if (n===true){
    console.log("True condition");

}
else {
    console.log("False condition")

}

console.log("-------------")

let n1:number=100, n2:number=200;

if (n1>n2){
    console.log("N1 is greater")
}
else{
    console.log("N2 is greatest")
}

console.log("-------------")

let x:number=1000;
let y:number=1800;
let z:number=500;

if (x>y && x>z){ //'&&' is short circuit operator which means if left condition fails it dont check right one
    console.log("X is greatest")
}
else if (y>z){
    console.log("Y is greatest")
}
else {
    console.log("Z is greatest")
}


console.log("-------------")

//Ternary
let n3:number=400;
let n4:number=500;

n3>n4 ? console.log("n3 is greatest"):console.log("n4 is greatest")


console.log("-------------")

let browser:string="Firefox"

browser=='chrome'? console.log("Launch Chrome"):browser=='Firefox' ? console.log("Launch Firefox") :console.log("Check the browser value")
// first condition                              // second condition embedded chrome                     // if no condition is met 

