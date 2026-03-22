//The problem with if else , is that it executes the code unnecessary , as we cant use break in, if else
    // we can user break in switch , for loops

//switch with string

let day:string='Saturday';

switch (day.toLowerCase()) {
    case 'Sunday':
        console.log("day is sunday")
        break;
    case 'Monday':
        console.log("Day id Monday")  
        break;
    
    case 'tuesday':
        console.log("Day id tuesday")  
        break;
    case 'wednesday':        
        console.log("Day id wednesday")  
        break;
    case 'Thursday':        
        console.log("Day id thursday")  
        break;
    case 'friday':        
        console.log("Day id friday")  
        break;
    case 'Saturday':        
        console.log("Day id saturday")  
        break;


    default:
        console.log("Wrong day entered")
        break;
}

// if we dont give break in above code then the next switch case will be executed, so break is necessary


//switch can be used for numbers
let marks:number=500;
switch (marks) {
    case 100:
        console.log("Marks: " +marks);
        break;
    case 200:
        console.log("Marks: "+marks);

    default:
        console.log("Cant print your marks");
        break;
}

//switch with boolean

let flas:boolean=true;

switch (flas) {
    case true:
        console.log("Value is true")
        
        break;
    

    default:
        console.log("outs of scope case")
        break;

        
}

console.log("---------------------------")

// switch with enum

enum browser {
    Chrome='chrome',
    Firefox='firefox',
    Edge='edge',
    safari="Safari"
}

let browserval:string=browser.Edge;

switch (browserval) {

    case browser.Chrome:
        console.log("Launch Chrome");        
        break;

    case browser.Firefox:
        console.log("Launch Firefox");
        break;

    case browser.Edge:
        console.log("launch Edge");
        break;

    case browser.safari:
        console.log("launch safari")
        break;

    default:
        console.log("Wrong browser")
        break;
}


//Assignments to do using switch case
    // RBAC: admin,seller,partner,vendor,catagory manager
    // CROSS BROWSER logic
    //Multi environment: QA, STAGE,DEV, UAT,PROD
    //Reading multifiles:JSON/XML/EXCEL type files