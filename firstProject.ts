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

myParameters(2)


// Creating functions in TS

function multiply(n:number){
    return n * 2
}


let ml = multiply(3) 
console.log(ml)