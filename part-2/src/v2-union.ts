//* Literal Type

type Status = "pending";

const status: Status = "pending";

console.log(status);

//* Basic Union

type Identity = string | number;

const id: Identity = 123;

console.log(id);

const id2: Identity = "abc";

console.log(id2);

//* Literal Union

type Role = "admin" | "user" | "guest";

const userRole: Role = "admin";

console.log(userRole);

//const role2: Role = "manager"; // Error: Type '"manager"' is not assignable to type 'Role'. Because "manager" is not one of the allowed string literals defined in the Role type, TypeScript will throw an error if you try to assign it to a variable of type Role.

//* Object Union

type Admin = { id: number; role: "admin"; privileges: string[] };
type Member = { id: number; role: "member"; plans: string[] };

type User = Admin | Member;

const user: User = {
  id: 1,
  role: "admin",
  privileges: ["read", "write"],
};

console.log(user);

const user2: User = {
  id: 2,
  role: "member",
  plans: ["basic", "premium"],
};

console.log(user2);
