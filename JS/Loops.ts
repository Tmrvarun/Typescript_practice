//Loops are used to perform continuous tasks in easy form 
//for loop : two type (for.. in and for.. of)
//whileloop and do while loop

//For loop: initialisation /consition and incrementation occur in single line

for(let i=1;i<=10;i++){
    console.log(i)
    //break; this will break the loop and prints only value 1
}

console.log("--------------------")

//even and odd numbers

for (let j=0;j<=10;j=j+2){
    console.log(j);
}

console.log("--------------------")

for (let k=0;k<=10;k=k+1){
    console.log(k);
}

//for .. of loop
console.log("--------------------")

let arr=[100,200,500];
for (let n of arr){
    console.log(n); //it will print the values of array one by one
}

// 100
// 200
// 500

console.log("--------------------")

//for.. in loop

let num2=[200,300,500,800];
for (let i in num2){
    console.log(i ,":",num2[i]); // i will print the index value of arrays one by one
}

// 0 : 200
// 1 : 300
// 2 : 500
// 3 : 800


// while loop uses : It is used when we dont know about the loop iteration
// eg. infinite page scrooling and stooping at desired page to find element
// continuous page loading 
// continuos page scrooling to find the desired element
//calendar handling
// Web pagination when we have to scrol within pages

// For loop uses: It is used when we know about the loop iteration
//used for drop down handling

//while and do while loops:

let nm=1;
while(nm<=10){
    console.log(nm);
    nm++;
}


//do while is used if we want our loop to run atleast once when condition is failing

let mn=1;
do {
    console.log(mn);
    mn++;
}while(mn>=10)