//interface and classes are two different entities
//interfaces are used when we dont know design but we know about requirement, means for future implementations
// classes are used when are sure about our design and requirement
// interface extends another interface and are implemented using classes
// 'extends' and 'implements' are the keywords used
// interfaces are not converted to JS file directle, so using type conversion they are compiled , it is called duck typing

interface I1 {
    ename:string;
    eid:number;
    esal:number;
    dis:()=> void // arrow function 
}

var xy:I1={ // here we are using a variable xy , through which we are assigning values to interface
    ename:'John',
    eid:1001,
    esal:20000,

    dis ():void{ // function implememntaion
        console.log(this.ename);
        console.log(this.eid);
        console.log(this.esal);
    }
}

xy.dis();
console.log(xy.eid);
console.log(xy.ename);
console.log(xy.esal);
