# Access Modifiers in TypeScript: Controlling Access to Class Members

## Introduction

One of the fundamental concepts of object-oriented programming is encapsulation. It's about controlling which data of a class is visible and modifiable by the rest of the world. TypeScript offers four access modifiers – `public`, `private`, `protected` and `readonly` – for this. Each one establishes a specific rule for who can read and/or update a class member.

## How Each Modifier Works

`public` members can be accessed everywhere, and every member is `public` by default. `private` members can only be used inside the class that declares them. `protected` members work like `private` ones, but subclasses can also use them. `readonly` members can be read anywhere, but can only be set in the declaration or the constructor.

## Example: Employee and Manager

```typescript
class Employee {
  constructor(
    readonly employeeId: number,
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    employeeId: number,
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(employeeId, name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}
```

By writing a modifier in front of a constructor parameter, such as `protected name: string`, you can declare and assign a property in one statement. `this.name` is `protected` and can be used by `Manager`. However, it's not possible to use `this.baseSalary` in `Manager`, because `private` members are not visible even in subclasses.

## Accessing Members from Outside

```typescript
const manager = new Manager(101, "Alice", 50000, "Engineering");

manager.getDetails(); // ✅ public
manager.name; // ❌ Error: 'name' is protected
manager.baseSalary; // ❌ Error: 'baseSalary' is private
manager.employeeId = 202; // ❌ Error: 'employeeId' is read-only
```

These errors are reported at compile time by TypeScript, prior to running the code. `getDetails()` has no modifier, so it remains `public` and can be called freely.

## Under the Hood

Access modifiers are only available in TypeScript. The compiled JavaScript includes a plain assignment, `this.baseSalary = baseSalary`, which means that the data is in fact not hidden at runtime. JavaScript's `#private` fields can be used in place of `private` to provide real runtime privacy.

## Conclusion

Access modifiers make it evident to users how the class members are supposed to be used and keep them from accidentally misusing the data. Use `private` for internal use, `protected` for subclasses that use the member, `readonly` for data that can only be read, and `public` for any other data. Together, they help to maintain safe and simple classes.
