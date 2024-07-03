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