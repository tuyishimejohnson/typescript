/* 1. Write a TypeScript program that declares a variable `name` and assigns it a string value. Also declare a variable `age` and assign it a number value. Finally print the values of name and age. */

let Name: string = "Johnson"
let age: number = 245
console.log(`This person is called ${Name} and has ${age} YO`)


/* 4. Write a TypeScript program that declares a variable as a number and then tries to assign a string to it to see type checking in action.  */

let myNum : number = 12

/* myNum = "The Gym" */
console.log(myNum)


/* 3. Write a TypeScript program that declares variables of the following data types: number, string, boolean, and undefined. Assign values to them and perform basic operations. */

let val1:number = 12
let val2:string = "Johnson"
let val3:boolean = true
let val4:undefined = undefined


console.log(val1, val2)


/*  Write a TypeScript program that defines an enumeration 'Color' with values 'Red', 'Green', 'White' and Blue. Create a variable 'selectedColor' of type 'Color' and assign it one of the enumeration values.  */

enum Color {
    Red,
    Green,
    White,
    Blue
}


let selectColor = Color.Blue

console.log(selectColor)


/* let i = 0
for(; ;) {
    console.log(i+1);
    i++;
    if(i >= 10) break;
}
 */

function add(a:number, b:number, c?:number):number {

    if(typeof c !== "undefined") {
        return a + b + c;
    } else {
        return a + b
    }
    
}


console.log(add(10, 20))


function restParams(...numbers:number[]):number {
    return numbers.reduce((acc, num) => acc + num, 0)
}


console.log(restParams(1,2,3))

class Person {
    firstName:string;
    lastName:string;
    constructor(firstName:string, lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }


    getNames(): string {
        return `${this.firstName} ${this.lastName}`
    }
}


const pers = new Person("Johnson", "Tuyishime")
console.log(pers.getNames())


let num1:number = 10
let mystr: string = "The Gym"
let v: boolean = false
let u: undefined = undefined

let num2: number = 20

const total:number = num1 + num2
console.log(total)

console.log(mystr + " is with me!")

let vue = "304"
console.log(parseInt(vue))

type a = string | number;

let uv : a
uv = 2
console.log(uv)

type myobject = string | number | boolean;


let myobject : {
    firstName: string,
    lastName: string,
    age: number,
    retired: boolean
}


myobject  = {
    firstName: "Johnson",
    lastName: "Tuyishime",
    age: 22,
    retired: false
}


console.log(myobject.firstName)