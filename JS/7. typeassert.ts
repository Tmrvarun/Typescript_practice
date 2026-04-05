//type assert are used to overide or tell compiler,about the type of variable conversion at run time or inference
// it gives us chance to decide about the type of variable 
//denoted by '<>' or 'as' keyword


let area:any=311.14;
let circum =<number>area+200; // type assert
console.log(circum)

let name11:any='tasty as cake and bitter as lime';
let a12=(name11 as string).length; // type assert 
console.log(a12);
