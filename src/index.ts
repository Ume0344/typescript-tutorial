// datatypes
let age: number = 20;
let last_name: string = "habiba";
let is_published: boolean = true;

// 'any' type
let grade; // grade is of type 'any' here as we dont define its type. But,
 // there is point of using typescript if we are using 'any' datatype.


function render(grade: any) {
  console.log(grade);
}

// arrays
// in javascript, we can have a array of mixed type like; numbers = [1, 2, '3']. 
// However, this is not allowed in typescript.
let digits: number[] = [1, 2, 3];
digits[0] = 20;

// tuples: data structure having fixed size collection of elements of same or different types.
let user: [number, string] = [0, 'habiba']; // tuple will become an array when converted to Javascript.
// so all the operations with array can be performed on tuples. i.e,
user.push(9) 
// not recommended to add more elements to tuple as they are fixed length.

// enums: List of related constants
enum Color {
  red = "Red",
  green = "Green",
  blue = "Blue"
}

let selectedColor: Color = Color.blue;
console.log(selectedColor);

// functions
function calculator(num1: number, num2: number, operation: string): number {
  if (operation == '+')
    return num1 + num2;
  else if (operation == '-')
    return num1 - num2;
  else if (operation == '*')
    return num1 * num2;
  else if (operation == '/')
    return num1 / num2;
  else
    return 0;
}

calculator(2, 3, '+'); // only allows to pass exact number of arguments defined in function.

// here taxYear is an optional argument. We have to define its default value
// function calculateTax(income: number, taxYear?: number): number {
// or we can define it like;
function calculateTax(income: number, taxYear: number = 2020): number {
  // if ((taxYear || 2020) < 2020)
  if (taxYear < 2020)
    return income * 1.4;
  else
    return income * 1.3;
}

let tax = calculateTax(50000)
console.log(tax)

// Object:  a data type that represents a collection of key-value pairs.
let employee: {
  readonly id: number, // readonly wont let us change the value of id in code.
  name: string,
  retire: (date: Date) => void,
} = {id: 1, name: 'habiba', retire: (date: Date) => {
  console.log(date)
}};

let currentDate: Date = new Date();
employee.retire(currentDate);

// Type Aliasing: to define a custom type, which can be used
// repeatively to define different variables of the respective type.
type Employee = {
  readonly id: number, // readonly wont let us change the value of id in code.
  name: string,
  retire: (date: Date) => void,
}

let employee1: Employee = {
  id: 1,
  name: 'Ume',
  retire: (date: Date) => {
    console.log(date);
  },
};

// Union types: to give a parameter more than one type (like 'from typing import Union'
// in Python)
function inchToCm(height: number | string): number {
  let heightInCm: number;
  if (typeof(height) === 'number')
    heightInCm = height * 2.54
  else
    heightInCm = Number(height) * 2.54
  return heightInCm
}

console.log(inchToCm('64'))

//Intersection types: Where a parameter can have two or more types.
type Draggable = {
  drag: () => void
}
type Resizeable = {
  resize: () => void
}

type UIWidget = Draggable & Resizeable

let textBox: UIWidget = {
  drag: () => {}, 
  resize:() => {},
}

// literal types: Where we define the values of a variable exactly or specifically.
let quantity: 50 | 100 = 50;

type Quantity = 50 | 100;
let quantity1: Quantity = 100;

// Nullable types: typescript does not allow to assign null to variable which has a spefic
// type (i.e, string). we need to use union to include null value to a variable.
function greet(name: string | null | undefined) {
  if (name)
    console.log("hi, %s", name);
  else
    console.log("hello");
}

greet(undefined);

// Optional chaining: safely access properties and methods of an object without causing runtime errors 
// if the object is null or undefined.
type Customer = {
  birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0)

// '?' is optional property access operator. it will only acces birthday property
// if customer is not null.
console.log(customer?.birthday?.getFullYear()) // only get year if customer and birthday are not null

// optional element access operator:  usefull when working with arrays
let customerArray: Customer[] = []
customerArray?.[0] // only access the first element of array if it is not null.

// optional call
let log = (numbers: number[]) => {console.log(numbers)}
// let log: any = null

log?.([1,2,3,4]) // only calls the log function if it is defined and not null
