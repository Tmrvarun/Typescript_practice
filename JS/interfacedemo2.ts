interface In1
{
    x:number;
    y:number;
    sum():number;
}
interface In2 extends In1
{
    a:number;
    b:number;
    sub():number;

}

class c1 implements In2
{
    x!: number;
    y!: number;
    a!: number;
    b!: number;
    sum():number{
        return (this.a + this.b);
    }
    sub():number{
        return (this.x - this.y);
    }

}

var cl1=new c1();
cl1.a=100;
cl1.b=200;
cl1.x=2000;
cl1.y=1000;
console.log(cl1.sub());
console.log(cl1.sum());