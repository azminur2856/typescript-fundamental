//* type alias vs interface

//? Interface is gerally connected to object
//? type alias is more connected to literals, unions, tuples,primitives

//TODO: type alias

type ID = number;

//! interface id = number; // Error: An interface can only extend an object type or intersection of object types with statically known members.

type Role = "admin" | "user" | "guest";

//! interfacr "admin" | "user" | "guest"; // Error: An interface can only extend an object type or intersection of object types with statically known members.

interface User {
  name: string;
  id: ID;
  role: Role;
}

const user: User = {
  name: "Azminur Rahman",
  id: 1,
  role: "admin",
};

//TODO: interface

interface Animal {
  species: string;
}

interface Cat extends Animal {
  breed: string;
}

const cat: Cat = {
  species: "Felis catus",
  breed: "Persian",
};

type Vehicle = {
  brand: string;
};

type Car = Vehicle & {
  //? "&" symbol is used to perform intersection
  model: string;
};

const car: Car = {
  model: "Corolla",
  brand: "Toyota",
};

//? Interfaces can be extended by other interfaces
interface IEmployee {
  name: string;
}

interface IEmployee {
  id: number;
}

const employee: IEmployee = {
  name: "Azminur Rahman",
  id: 1,
};

//! This is not valid
// type TEmployee = {
//   name: string;
// };

// type TEmployee = {
//   id: number;
// }; // Error: Duplicate identifier 'TEmployee'.
