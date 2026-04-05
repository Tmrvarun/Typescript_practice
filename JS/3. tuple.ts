//Tuples are ordered and indexed
//They are not dynamic like arrays,which means data can not be added at run time
//tuples are also collection of data types 
//They have fixed sized

let tuple1:[string,any]=["Let",true]
console.log(tuple1[1]);//true

let tuple2: [number,string]=[1001,"Ravi"]
console.log(tuple2[0]);//1001

let tuple3:[string,number,boolean][]=[["First",1001,true],["Second",1002,false],["third",1003,true]]
console.log(tuple3[0][2])//true
console.log(tuple3) //[ 'First', 1001, true ],
                    //[ 'Second', 1002, false ],
                    //[ 'third', 1003, true ]

//console.log(tuple3[1]) // 'Second', 1002, false ]
console.log(tuple3[1][0]) // Second
//tuple3.push(["New",1004,true]);
//console.log(tuple3)
