//! Avoid using type assertion unless necessary

//? Type assertion

//* "as" syntax

type Status = "pending" | "approved" | "rejected";

const someStatus: string = "pending";

const showStatus = (status: Status) => {
  console.log("Your current status is: " + status);
};

// showStatus(someStatus); // Error: Argument of type 'string' is not assignable to parameter of type 'Status'.
showStatus(someStatus as Status); // No error, using "as" syntax for type assertion

//* non-null assertion

interface Config {
  port?: number;
}

const config: Config = {
  port: 8080,
};

// Using non-null assertion to tell TypeScript that we are sure the value is not null or undefined.
const currentPort: number = config.port!; // No error, using non-null assertion.
const currentPort2: number = config.port as number; // No error, using "as" syntax for type assertion.

//* constant assertion

const configuration = {
  port: 8080,
  prefix: "/api/v1",
} as const; // Using constant assertion to make the object properties readonly and their types literal.

// const configuration.port = 9090; // Error: Cannot assign to 'port' because it is a read-only property.
