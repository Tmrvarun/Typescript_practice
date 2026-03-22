//Arrays are collection of datatypes
//data can be added at runtime , they are not ordered

let names:string[]=["Try","Test","Run"]
console.log(names[0]);
names.push("Help");
console.log(names);

let arraynames:Array<string>=["Help","String","One"]
console.log(arraynames);

let arraynum:Array<number>=[101,102,103]
console.log(arraynum[2])

let arrayany:Array<any>=["Any",101,true]
for (let i=0;i<arrayany.length;i++){
    console.log(i,":",arrayany[i])
}
console.log("----------")

let arraylen:Array<any>=["Number",1001,'try',false]
for (let e in arraylen){
    
    console.log(e,":",arraylen[e]);
}