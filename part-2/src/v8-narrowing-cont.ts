//* Some caveat of Type Guard

const printAll = (x: string | string[] | null) => {
  if (x && typeof x === "object") {
    for (let str of x) {
      console.log(str);
    }
  } else if (typeof x === "string") {
    console.log(x);
  } else {
    console.log("");
  }
};

printAll(["Hello", "World"]); // Output: "Hello" "World"
printAll("Hello, TypeScript!"); // Output: "Hello, TypeScript!"
printAll(null); // Output: ""

//* Equality

const compare = (x: number | string, y: number | boolean) => {
  if (x === y) {
    console.log(x, y);
  }
};

compare(2, 2); // Output: 2 2

const printAll2 = (x: string | string[] | null) => {
  if (x !== null) {
    if (typeof x === "object") {
      for (let str of x) {
        console.log(str);
      }
      return;
    }
    console.log(x);
    return;
  }
  console.log("");
};

printAll2(["Hello", "World"]);
printAll2(null);
printAll2("Hello, TypeScript!");

//* "in" operator

type Bird = {
  fly: () => void;
};

type Fish = {
  swim: () => void;
};

const move = (animal: Bird | Fish) => {
  //   animal.fly(); // Error: Property 'fly' does not exist on type 'Bird | Fish'. Property 'fly' does not exist on type 'Fish'.
  if ("fly" in animal) {
    animal.fly();
    return;
  }
  animal.swim();
};

//* "instanceof" check

const date = new Date();
const err = new Error("This is an error message.");
console.log(date instanceof Date); // Output: true
console.log(err instanceof Error); // Output: true

const showDate = (x: Date | string) => {
  if (x instanceof Date) {
    console.log(x.toISOString());
    return;
  }
  const date = new Date(x);
  console.log(date.toISOString());
};

showDate(new Date()); // Output: Current date in ISO format
showDate(new Date("2024-06-16")); // Output: 2024-06-16T00:00:00.000Z
showDate("12-16-1971"); // Output: 1971-12-15T18:00:00.000Z
// Cause: non-ISO string is parsed as local time (Dhaka, UTC+6) → 1971-12-16 00:00 local.
// toISOString() always shows UTC, so 6 hours are subtracted → 1971-12-15 18:00 UTC.
// Fix: use ISO format "1971-12-16" (parsed as UTC) to get 1971-12-16T00:00:00.000Z

//* Discriminated Union

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

const getArea = (shape: Circle | Square) => {
  if (shape.kind === "circle") {
    console.log(shape.radius);
  } else {
    console.log(shape.sideLength);
  }
};
