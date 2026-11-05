//* Utility Types

//* Partial

interface User {
  id: string;
  name: string;
  email: string;
}

type partialUser = Partial<User>;

const updateProfile = (id: string, data: partialUser) => {
  // Some backend logic to update the user profile
};

updateProfile("123", {
  name: "Azminur Rahman",
});

//* Required

interface Config {
  apiKey?: string;
  timeout?: number;
}

type requiredConfig = Required<Config>;

const initialize = (config: requiredConfig) => {
  // some logic
};

initialize({ apiKey: "123", timeout: 5000 });

//* Pick

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

type ProductPreview = Pick<Product, "name" | "description">;

const preview: ProductPreview = {
  name: "Laptop",
  description: "A high-end gaming laptop",
};

//* Omit

interface Employee {
  id: number;
  name: string;
  salary: number;
  nid: string;
}

type PublicEmployee = Omit<Employee, "salary" | "nid">;

const directoryEntity: PublicEmployee = {
  id: 1,
  name: "Azminur Rahman",
};

//* Record

type Environment = "development" | "staging" | "production";

type ApiUrls = Record<Environment, string>;

const apiUrls: ApiUrls = {
  development: "http://localhost:3000",
  staging: "https://staging.api.com",
  production: "https://api.com",
};
