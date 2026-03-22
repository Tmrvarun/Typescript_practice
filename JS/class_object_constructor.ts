// Class is defined as the collection of data types , methods and constructors
// class is logical entity and objcet is a physical entity
// example: lets take a class in a school, it has students with age name , amd have behavior like drinking reading etc
    // so we create objects in the form of students 
    // functions defined in a class are called methods and if they are defined independently then they are called functions

class employee1
{
    ename: string; // as per new implementation we have to give exclamation mark to remove the error
    eid: number;
    eage:number;

    constructor(empname:string,empid:number,empage:number){
        this.ename=empname;
        this.eid=empid;
        this.eage=empage;

    }

    display():void{
        console.log(this.ename);
        console.log(this.eid);
        console.log(this.eage)
    }
    setdata(name:string,id:number,age:number):void{ // this function is taking values from the object.
        this.ename=name;
        this.eid=id;
        this.eage=age

    }


}

// var emp=new employee1
// // emp.ename="Test name"
// // emp.eage=29
// // emp.eid=1001
// // emp.display();

// emp.setdata('Test name',29,1001) // instead of setting values like above we can define a function which takes values from here
// emp.display();

var emp1=new employee1('Test name',1001,29); // if we dont send values to constructor from here, then it throws error.
emp1.display();

