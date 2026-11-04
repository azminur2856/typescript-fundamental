//* Top types

let helloWorld: any = "Hello, World!";
helloWorld = 42; // No error, x can be of any type
helloWorld = true; // No error, x can be of any type

helloWorld.length; // No error, but may cause runtime error if x is not a string

let something: unknown = "Hello, World!";

// something.length; // Error: Object is of type 'unknown'.

//* Core types

// Example: core types are assignable to top types (unknown)
let something2: unknown;
const something3: number = 42;
something2 = something3; // No error, unknown can accept any type

// Reverse is not allowed without narrowing:
// const num: number = something2; // Error: 'unknown' is not assignable to 'number'

// Core (primitive) types
const isDone: boolean = false;
const age: number = 42;
const userName: string = "Azminur Rahman";

//* Nullish types

interface User {
  name: string;
}

type LoggedInUser = User | null;

const currentUser: LoggedInUser = null; // No error, currentUser can be null because of the union type

//* Union type

const greet = () => {
  console.log("Hello, World!");
};

something2 = greet(); // No error, unknown can accept any type

// const greeting: string | number = greet(); // Error: Type 'void' is not assignable to type 'string | number'.

//* Literal types
type Status = "pending" | "success" | "error";
let someStatus: Status;

let status: Status = "pending";

someStatus = status; // No error, Status is a union type of string literals

//* Sub-type of union type

const anotherGreet = (): undefined => {
  console.log("Hello, Universe!");
  return undefined; // No error, the return type is explicitly defined as undefined
};

// The return type of anotherGreet is undefined, which is a subtype of void
const greeting: void = anotherGreet(); // No error, greeting is of type undefined, which is a subtype of void

console.log(greeting); // Output: undefined

//* Bottom type

// let neverHappening: never = 42; // Error: Type '42' is not assignable to type 'never'.

const throwError = (msg: string): never => {
  throw new Error(msg);
};

// never is assignable to every type, but no type is assignable to never (except never itself)
try {
  const x: string = throwError("This is an error message."); // No type error, never is assignable to string
} catch (error) {
  console.log("Caught:", (error as Error).message); // Output: Caught: This is an error message.
}
