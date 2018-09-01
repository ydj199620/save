function bb(a:number,b:number):number{
    return a+b
}
console.log(bb(1,2))

export class Aa{
    private name:string;
    constructor(name:string){
        this.name=name;
    };
    b(name){
        this.name = name
        console.log(this.name)
    }
}
let c =new Aa('王');

interface IDog{
    name:string;
    color:string;
    style:string;
}
let a:IDog={
    name:'旺财',
    color:'绿色',
    style:'dog',
}
console.log(a)
