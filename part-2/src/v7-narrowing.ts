//* "typeof"

let x = 10;

// "typeof" is used to check the type of x
console.log(typeof x); // Output: "number"

let y = "Hello, TypeScript!";
let z = true;
let a = { name: "Azminur Rahman", age: 42 };
let b = [1, 2, 3, 4, 5];

console.log(typeof y, typeof z, typeof a, typeof b); // Output: "string" "boolean" "object" "object"

//* Type Guard

const print = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value;
  }
};

console.log(print("hello")); // Output: "HELLO"
console.log(print(13)); // Output: 13

//* Truthiness

type User = {
  name: string;
  address?: {
    street: string;
  };
} | null;

const loggedInUser: User = {
  name: "Azminur Rahman",
  address: {
    street: "123 Main St",
  },
};

const showAddress = (user: User) => {
  if (user && user.address) {
    console.log(user.address.street);
    return;
  }
  throw new Error("User is null or undefined");
};

//*
