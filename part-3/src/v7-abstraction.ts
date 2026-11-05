//* Abstraction: every employee must define how their pay is calculated.

abstract class Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative.");
    }
    this._baseSalary = newSalary;
  }

  //   abstract calculatePay(): number{} // Error: This method must be implemented by subclasses, but we don't provide an implementation here in the abstract class.

  abstract calculatePay(): number;

  //   abstract getResources(): string[];
  //   abstract registerEntryTime(): string;
}

// const employee = new Employee("Azminur", 100000); // Error: Cannot create an instance of an abstract class.

class Manager extends Employee {
  calculatePay(): number {
    return this.baseSalary + 5000;
  }
}
class Developer extends Employee {
  calculatePay(): number {
    return this.baseSalary + 3000;
  }
}
