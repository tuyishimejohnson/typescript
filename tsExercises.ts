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




/* 3. Write a TypeScript program that declares variables of the following data types: number, string, boolean, and undefined. Assign values to them and perform basic operations. */

let num1:number = 10
let mystr: string = "The Gym"
let v: boolean = false
let u: undefined = undefined

let num2: number = 20

const total:number = num1 + num2
console.log(total)

console.log(mystr + " is with me!")

/* Write a TypeScript program that converts a variable of one type to another using type assertions and type conversion functions like parseInt(). */


let vue = "304"
console.log(parseInt(vue))


/*  Write a TypeScript program that creates type aliases for complex data types such as objects or custom types. Use them to define variables and explain how they improve code readability. */

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


/* Write a TypeScript program that declares an array of a specific data type. It will demonstrates common array operations like adding elements, removing elements, and iterating through the array. */

let newArray: number[] = [1,3,4,56,39, 70,2,4,60]

let newVal = newArray.filter(number => number % 2 !== 0)
let sum = newArray.reduce((a, b) => a + b, 0)
let multi = newArray.reduce((a, b) => a * b, 1)

console.log(multi)
console.log(newVal)
console.log(sum)


/* 1. Write a TypeScript program that declares a variable 'result' that can hold either a 'string' or a 'number'. Now write a function that takes an argument of type 'string | number | boolean' and logs its type. */

let result1 : string | number;

function takeArg(a:string | number | boolean): void {
    console.log(typeof a)
}

takeArg(true)

/* 2. Write a TypeScript program that creates a function combine that accepts two parameters of types boolean and number. It returns a value that can be either a boolean or a number. Use a union type to achieve this. */

function combine(a:boolean, b:number): boolean | number {
    if(typeof a === "boolean") {
        return b
    } else {
        return a
    }
}


/* 3. Write a TypeScript program that defines a TypeScript interface Car with properties make and model of type string. Create a type Bus with properties make and model of type string and an additional property payloadCapacity of type number. Now, create a type Vehicle that represents either a Car or a Truck using a union type. */


interface Car {
    make:string,
    model: string
}

type Bus = {
    make: string,
    model: string,
    payLoadCapacity?: number
}

type Vehicle = Car | Bus


/* Write a TypeScript program that declares a variable 'result' that can hold either a 'string' or a 'number'. Now write a function that takes an argument of type 'string | number | boolean' and logs its type. */


type result = string | number;

function takeType(varx:result | boolean) {
    return typeof varx
}

console.log(takeType(23))



/* Write a TypeScript program that declares an array containing both numbers and strings. Use type assertions to extract number, string and boolean values from the array. */

function myCount<T, U, V>(arg: (string | boolean | number)[]):T[] {
    

    let str: string[] = arg.filter(item => typeof item === "string")
    let bool: boolean[] = arg.filter(item => typeof item === "boolean")
    let num: number[] = arg.filter(item => typeof item === "number")


    return typeof arg === "string" ? str :
            typeof arg === "number" ? num :
            typeof arg === "boolean" ? bool : arg
}

console.log(myCount<number, string, boolean>(["johnson", true, "x", 34,  "type", 30, false]))
