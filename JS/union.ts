//Unions are used to store any one value in variable , 

let unionvalue:(string|number);
unionvalue='Test';
unionvalue=1001;
//unionvalue=true; // error shown ,as  we declared string or number type storage only


function unionstore(empid:(string|number)){
    if (typeof(empid)=='string'){
        return ('Varun');
    }
    else if(typeof(empid)=='number'){
        return 1001;
    }
}

console.log(unionstore('let')); // Varun
console.log(unionstore(5000)); //1001