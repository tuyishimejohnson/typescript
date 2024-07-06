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


let i = 0
for(; ;) {
    console.log(i+1);
    i++;
    if(i >= 10) break;
}
