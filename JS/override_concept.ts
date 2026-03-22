// suppose we have method and we want to chnage the values or output of that method, then we have to override the value of one method

class roi{
    rateofintrst=0;
    rate(){
        return this.rateofintrst
    }    
    }

class bankl extends roi{
    rate():number{
        return 10.5;
    }
    
}

class bank2 extends roi{
    rate():number{
        return 12;
    }
}

var x=new bank2
console.log(x.rate()) // need to give bracket after name if method return a value
var y=new bankl
console.log(y.rate())