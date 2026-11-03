//* Basic Types
// let myString: string = "Hello, TypeScript!";
// let myNumber: number = 1234;
// let myBoolean: boolean = false;
// let mySymbol: symbol = Symbol();
// let myBigInt: bigint = 100n;

//* Type safe function
const addTwo = (a: number, b: number): number => {
  return a + b;
};

console.log(addTwo(100, 20));

//* Array and Tuple an readonly modifier

// const arr: Array<string> = ["Programing", "Hero"];
const arr: string[] = ["Programing", "Hero"];

const numArr: number[] = [1, 2, 3, 4, 5];

const jashoreLatLong: readonly [number, number] = [23.16971, 89.21371];

//* Optional. Default and Rest Parameters (...args)

const concatName = (firstName: string, lastName?: string): string => {
  if (!lastName) {
    return firstName;
  }
  return firstName + " " + lastName;
};

console.log(concatName("Azminur"));

const greeting = (fullName: string, greeting: string = "Hello"): void => {
  console.log(greeting + " " + fullName);
};

greeting("Azminur");
greeting("Azminur", "Hi");

//* Rest Parameters (...args)

const sum = (...numbers: number[]) => {
  return numbers.reduce((total, sum) => total + sum, 0);
};

sum(1, 2, 3, 4, 5);

const logUserAction = (
  ...args: [name: string, age: number, isActive: boolean]
) => {
  const [name, age, isActive] = args;
  console.log(name + " " + age + " " + isActive);
};

logUserAction("Azminur", 25, true);

//* Object type, type alias and interface

// Type Alias
type Address = {
  holdingNumber: number;
  streetName: string;
  city: string;
  zip: string;
};

type TUser = {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badge: string[];
  address: Address;
};

// Interface
interface IUser {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badge: string[];
}

type UserName = string; // type alias can be used for any type
// interface IUserName = string; not allowed because interface can only be used for object types

const userT: TUser = {
  name: "Azminur",
  age: 25,
  isActive: true,
  action: () => {
    console.log("User is active");
  },
  badge: ["Developer", "Contributor", "AI Automation Engineer"],
  address: {
    holdingNumber: 123,
    streetName: "Main St",
    city: "Jashore",
    zip: "7400",
  },
};

const userI: IUser = {
  name: "Azminur Rahman",
  age: 30,
  isActive: false,
  action: () => {
    console.log("User is inactive");
  },
  badge: ["Designer", "Developer"],
};
