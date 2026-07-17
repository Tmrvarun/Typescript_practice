// let n1:number;
// n1=256;
// console.log(n1);

// let n2:number=1256;
// console.log("number is: ",n2)

// let name1:string;
// name1='Varun'
// console.log(name1)

//Array :stringtype and number type

// let string1:string[];
// string1=["Test",'Array']
// console.log(string1[1])
// string1.push('Pushed element')
// console.log(string1)

// let array2:number[]
// array2=[101,102,103]
// console.log(array2)
// array2.push(104)
// console.log(array2)

//tuple

// let tup:[number,string,boolean]
// tup=[101,'varun',true]
// console.log(tup)


//Functions:

// function f1(a:number,b:number):number{
//     return a+b;
// }

// console.log(f1(10,20))


// union-intersect

// let c1:(string|number)
// c1=101
// c1='test'
// console.log(c1)

// let stud1:{name:string,age:number,address?:string}
// stud1={name:'varun',age:36}
// console.log(stud1)

// let stud2:{name:string,class:number,section?:string}
// stud2={name:'tarun',class:5,section:'F'}
// console.log(stud2)

// //type alias : we have to write type keyword , and alias means it is a short cut 

// type C1=string|number;
// let c:C1
// c=101
// c='string'

//interfaces with union(|) and intersection(&): 

// interface stude1{
//     name:string
//     class:number
//     section: string
// }

// interface stud2{
//     name1:string
//     rollnumber:number
//     examstatus:boolean
// }

// let p1:(stude1|stud2) // Any properties of the interfac parameter works

// p1={name:'Student',rollnumber:123,examstatus:true}

// let p2:(stude1 & stud2) // both unyerface parameter should be assigned to object here
// p2={name:'stud1',rollnumber:186,examstatus:true,name1:'Test2',class:5,section:'D'}
// console.log(p2)

//classes & objects


//CONVENTIONAL METHOD LIKE JAVA SCRIPT

// class car {
//     model;

//     constructor(model:string){
//         this.model=model
//     }

//     getmodel(){
//         console.log(this.model)
//     }
// }

// let c1=new car('Audi')
// c1.getmodel()


// //Typescript implementation in which we apply keyword public private protected

// class car2{
//     constructor(public model2){

//     }
//     getmodel2(){
//         console.log(this.model2)
//     }
// }

// let c2=new car2("BMW")
// c2.getmodel2()



//interfaces implementtaion in a class

// interface car_detail{
//     car_name:string;
//     model_year:number;

// }
// interface car_colour{
//     colour:string;
//     PUC_Valid:boolean
// }

// class car_brand implements car_detail,car_colour{
//     constructor (public car_name,public model_year,public colour,public PUC_Valid){

//     }

//     getcar_details(){
//         console.log(this.car_name)
//         console.log(this.model_year)
//         console.log(this.colour)
//         console.log(this.PUC_Valid)
//     }

// }

// let car_show=new car_brand("Merc",2026,'Black',true)
// car_show.getcar_details()



//  Never condition:

// let str1:[]=[]
// str1.push('Hello')

// //here since string is initialized abut no parameter type is assigned ,that is a condition that can never happen 

// //output: Argument of type '"Hello"' is not assignable to parameter of type 'never'


// let c:string &number //since variable can have only one variable type that means it has never happen condition 
// c=123
// //output : Type '123' is not assignable to type 'never'


//Generics: These are used when we want to assign a type to a variable ,later in future 

// function Generics<T>(a:T,b:T):T[]{
//     return [a,b]
// }

// Generics<string>('1','2'); //HERE WE ARE ASSIGNITING STRING TYPE to variable generIc T 
// Generics<number>(1,2)
// Generics<Array<number>>([1],[2])


//Class inheritance: it is a concept of inheriting parent class method and variables into child class


//1. Normal inheritance:

// class animal{
//     move(){
//         console.log ('Animal Move')
//     }
// }

// class dog extends animal{
//     walk(){
//         console.log('Dog walks')
//     }
// }

// let D=new dog()
// D.walk()
// D.move()


// 2. Inheriting using constructor : here if we add constructor in both parent and child , then we have to add super (parent parameter) in child constructor , so that constructor parameter become accessible

// class animal{
//     constructor(public name){

//     }
// }

// class dog extends animal{

//     constructor (public breed,public name){
//         super(name)
//     }

//     display(){
//         console.log(this.name,this.breed)       
//     }

//     walk(){
//         console.log('Dog walks')
//     }
// }

// let D=new dog('Dalmation','Bruno')
// D.walk()
// D.display()
