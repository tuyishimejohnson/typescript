const x: string = "Hello Johnson"
const p: [number, number] = [20, 30]
const [a, b] = p
console.log(p)
console.log(x)

let w : number = 4
console.log(w)

// Creating an object

const obj: {name: string, age: number} = {name: "Johnson", age: 34}
console.log(obj)


// Union types

function myParameters(para: number | string) {
    console.log(`This is the number ${para}`)
}

myParameters("Johnson")


// Creating functions in TS

function multiply(n:number){
    return n * 2
}


let ml = multiply(3) 
console.log(ml)


// Adding optional parameters in TS

function mult(a:number, b:number, c?:number) {
    return a * b + (c || 0)
}

console.log(mult(2, 4))

// rest parameters 

function add(n:number, b:number, ...rest:number[]) {
    return n + b + rest.reduce((x, y) => x + y, 0)
}

console.log(add(1,3,45,6,7,8))



interface Description {
    name: string,
    year: number,
    model: string,
    onSale: boolean
}


function car(): Description {
    return {
        name: "audi",
        year: 2020,
        model: "SUV",
        onSale: true
    }
}

let result = car()

console.log(result.name)


const xa = (val:number) => val ** 2

console.log(xa(8))


let n = 3
console.log(n)

let Car:object;

// Creating objects in typescript
Car = {
    name: "Lamborghini",
    model: "SUV",
    year: 2024,
    type: "Electric Vehicle"
}

console.log(Car);

let z: (string | number)[] = []

z.push("Alain", "Johnson", "MP", "Annick", 4, 6)

console.log(z)


type x = string;

let myStr:x = "Johnson";

console.log(myStr)


// Using for loop

let i = 0
for(; ;) {
    console.log(i+1);
    i++;
    if(i >= 10) break;
}



// Optional parameters in a function 

function adds(a:number, b:number, c?:number):number {

    if(typeof c !== "undefined") {
        return a + b + c;
    } else {
        return a + b
    }
    
}


console.log(adds(10, 20))


// Rest parameters in a function

function restParams(...numbers:number[]):number {
    return numbers.reduce((acc, num) => acc + num, 0)
}


console.log(restParams(1,2,3))


// Classes in TS

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


// Intersections in TS
// Interfaces in TS

interface Person {
    firstName: string,
    lastName: string,
    age: number
}

let xp: object

xp = {
    firstName:"Johnson",
    lastName: "Tuyishime",
    age: 22
}


function data(xp:Person) {
    return xp.firstName + " " + xp.lastName
} 

function getRandom<T>(items: T[]):T {
    let x = Math.floor(Math.random() * items.length)

    return items[x]
}

console.log(getRandom<number>([1, 5, 7, 4, 2, 9]))

function mygGeneric<T>(x:T):T{
    return x
}

let cd = mygGeneric<string>("Hello")


console.log(cd)


function anotherGen<T extends number, U extends number>(first:T, second: U) {
    
    return first + second
}

let ou = anotherGen<number, number>(10,3)
console.log(ou)

let myT: [number, number, boolean]
myT = [112, 112, true]
myT.push(false)
console.log(myT)

let arr: (string | number)[] = []
arr.push("Johnson", "Jakdf", "sfkaldfe")

console.log(arr)


let xam: Array<number> = []

xam.push(10, 304, 54, 2, 43)

console.log(typeof xam, xam)


