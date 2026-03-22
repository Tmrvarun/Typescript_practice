//Enums are the collection of set of daya types
//denoted by: enum {}
//Three types: String, Number,heterogeneous

//String type 

enum browser{
    Chrome,
    Edge,
    Firefox=10,
    Safari
}
console.log(browser) 

// output:  '0': 'Chrome',
 // '1': 'Edge',
 // '2': 'Firefox',
 // '3': 'Safari',
 // Chrome: 0,
 // Edge: 1,
 // Firefox: 2,
//Safari: 3 // by default indexes are assigned to enum values , we can change the order as well //  Firefox: 10, Safari: 11

enum browser1{
    Edge,  
    Firefox,
    Safari,
    Chrome=browservalue('chrome') // while calling function we have to put this below , else error will be thrown
  
}

function browservalue(browsername:string): number{ // here function browservalue has browsername variable that has string type value and return a number value
    if (browsername=='chrome')
        {
            return 115;
        }
        else{
            return -1;
        }
}

console.log(browser1.Chrome) // Passed //  to call the above enum we use this console.log block