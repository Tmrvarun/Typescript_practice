// type annotations

// let num:number;
// num=101
// console.log(num)

// let str:string='Test string'
// console.log(str)

// let bol:Boolean=false;
// console.log(bol)

// const arr:string []=['Hi','PLease']
// for (let i in arr){
//     console.log(arr[i])

// }

// function add(a:number,b:number){
//     return a +b;
// }
// console.log(add (10,20))

//tuples and objects

// let tup:[number,string,boolean]=[101,'test',true]
// console.log(tup)

// let person:{name:string,houseno:number,avlb:boolean}
// person={name:'arun',houseno:101,avlb:true}

//optional property : denoted by question mark, optional parameter is places at the end of statement

// let otherperson:{name:string,street:string,state?:string}
// otherperson={name:'Varun',street:'Wall street'}
// console.log(otherperson)

// function add(a:number,b?:number){
//     return b? a+b:a; // return only a if b is not passed, else it return a+b if both are passed
// }
// console.log(add (100))


// interface:

// interface if1{
//     brand:string;
// }

// class testa implements if1{
//     constructor(brand:string){
//         this.brand=brand;
//     }
//     disp(){
//         console.log(this.brand)
//     }
   
// }

// let test1=new testa('Audi')
// test1.disp()

// union (|)and intersection(&):

// interface student{
//     name:string
//     section:string
//     rollno:number
// }

// interface person{
//     person_name:string
//     address:string
//     id:number
// }

// let s1: student|person //union 
// s1={name:'Student',section:'123 lane',rollno:123} //either person or student parameter  vales are passed , it can work if mixed vales are passed , error will pop out
// console.log(s1)

// let s2: student & person // intersection
// s2={name:'Varun',section:'123 lane',rollno:123,person_name:'test',address:'456 lane',id:1234} // both student and person parameter vales will be needed here



//type alias: here we can assign any type to a variable 

// type Count=number|string // type alias syntax
// let c:Count
// c='string alias'
// c=101
// c=true // error as c is boolean type and here we have assigned number and string to it


// class and constructors

// class car{
//     brand;
//     constructor (brand){
//         this.brand=brand
//     }
//     dsp(){
//         console.log(this.brand)
//     }
// }

// let bmw=new car('BMW');
// bmw.dsp();

// class car{
//     constructor (public brand){} // here we are assigning public keyword to brand parameter so that it can be accessed directly

//     dsp(){
//         console.log(this.brand)
//     }
    
// }
// let carY=new car('Audi')
// carY.dsp()



//Implements in interface :

// interface if1{
//     name:string
//     rollno:number
// }

// interface if2{
//     age:number
//     sex:string
// }
// class Student implements if1,if2{

//     sname:string
//     s_rollno:number
//     s_age:number
//     s_sex:string


//     constructor(name:string, rolllno:number, age:number, sex:string) {
//         this.sname=name
//         this.s_rollno=rolllno
//         this.s_age=age
//         this.s_sex=sex
        
//     }
//     dsp1(){
//         console.log(this.sname)
//         console.log(this.s_rollno)
//         console.log(this.s_age)
//         console.log(this.s_sex)
//     }

// }
// let stud=new Student('Varun',101,35,'male')
// stud.dsp1()
