//inheritance is a concept where a child class 'extends' the properties of parent class
// while extending the child class also extends the emthods and variable of parent and for method we have to define additional variable

class employee{
    empname:string;

    constructor (name:string)
    {
        this.empname=name; // since methods cannot access global/class variable , so we use 'this' keyword here

    }
}

class employee2 extends employee{ // chuld extends parent class
    empid:number;

    constructor (id:number,name:string){
        super(name); // we have extended parent class employee , so we have to send two parameters now to super or parent and it should be placed here , else it will thow an error. 
        this.empid=id;

    }

    display():void{
        console.log(this.empid);
        console.log(this.empname)
    }
}


var emp11=new employee2(1001,'Test name 2')
emp11.display();