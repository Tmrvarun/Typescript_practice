// there are two types of function parameters , default and optional 
// optional parameters are denoted by writing '?' sign in the statement
// if we dont give any value then function picks default value for parameter

// optional parameter

function dnd(a:string,b:number,c ?:boolean){ // here ? denotes optional parameter and it is given at the end parameter not the following one , eg: if we apply ? to b the it thwors error
    console.log(a);
    console.log(b)
    console.log(c)
}

dnd('Hello',100) // hello ,100, undefined (since last parameter is not sent then output is undefined here)

// default parameter

function klm(a:number,b:string='Default value'){
    console.log(a,b)
    

}
klm(20,'Passed value') //20 Passed value 
klm (20) // 20 Default value (since we have not passed any value in argument so the default value in parameter got picked here)

