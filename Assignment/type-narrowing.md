# Type Narrowing in TypeScript: Making Union Types Safe

## Introduction

Union types enable a variable to be of more than one type, such as `string | number`. But TypeScript only permits operations that are valid for all of the types in the union. For example, the `toUpperCase()` method can't be called on `string | number`, as numbers have no `toUpperCase()` method. Type narrowing resolves this issue. With the help of control flow analysis, TypeScript can determine a more specific type for the variable along every code path in your `if`, `else`, and `return` statements.

## Using `typeof`

`typeof` is best suited for primitive types such as strings, numbers and booleans.

```typescript
const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
};
```

Within each branch, TypeScript is aware of the precise type. Also, in the last `else` clause, `input` will have to be a `boolean`, as nothing else is left. One common pitfall is that `typeof null` is `"object"`, which means that `typeof` is not sufficient to distinguish between `null` and objects.

## Using `instanceof`

The `instanceof` operator tests to see if an object was constructed from a class, such as `Error` or `Date`. It can be used in a `catch` block, where strict mode will type the caught error as `unknown`. In this case, `validateAgeAsync` rejects with an `Error`.

```typescript
const checkAge = async (age: number): Promise<void> => {
  try {
    await validateAgeAsync(age);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
```

This check is required; otherwise, there will be a compile error for `error.message`. But `instanceof` only works with constructors like classes: interfaces are erased during compilation from TypeScript to JavaScript.

## Using `in`

For interfaces and plain objects, the `in` operator determines if the object has a certain property.

```typescript
interface Admin {
  name: string;
  permissions: string[];
}
interface Customer {
  name: string;
  orders: number;
}

const describeUser = (user: Admin | Customer): string => {
  if ("permissions" in user) {
    return `Admin with ${user.permissions.length} permissions`;
  }
  return `Customer with ${user.orders} orders`;
};
```

If `permissions` exists, `user` is an `Admin`. Otherwise, it is a `Customer`.

## Conclusion

Type narrowing is the key to using union types safely. Use `typeof` for primitives, `instanceof` for classes and `in` for object shapes. The checks are run as regular JavaScript, but TypeScript uses them to know about your types. This means mistakes show up as compile-time errors, not run-time errors.
