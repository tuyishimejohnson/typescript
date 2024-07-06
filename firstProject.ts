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





