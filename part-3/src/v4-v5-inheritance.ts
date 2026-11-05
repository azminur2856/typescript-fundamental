//* Inheritance: a Manager ia an Employee with additional responsibility.

class Employee {
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

  describe(): string {
    return `${this.name} earns ${this.baseSalary}`; // We can use _baseSalary as this method is part of the Employee class, but it's better to use the getter for encapsulation.
  }
}

class Manager extends Employee {
  //   teamMemberCount: number;
  //   constructor(name: string, _baseSalary: number, teamMemberCount: number) {
  //     super(name, _baseSalary);
  //     this.teamMemberCount = teamMemberCount;
  //   }

  // Using parameter properties to reduce boilerplate code
  constructor(
    name: string,
    _baseSalary: number,
    public teamMemberCount: number,
  ) {
    super(name, _baseSalary);
  }

  describeWork(): string {
    return `${this.name} manages ${this.teamMemberCount} people.`;
  }

  describeManager(): string {
    // We can access _baseSalary here because it's protected but if it was private, we would not be able to access it in this subclass.
    return `${this.name} earns ${this._baseSalary} and manages ${this.teamMemberCount} people.`;
  }
}

const employee = new Employee("Azminur", 100000);
console.log(employee.describe());

const manager = new Manager("Rahman", 150000, 5);

console.log(manager.describeWork());

console.log(manager.describeManager());

// manager._baseSalary = 160000; //we can not access _baseSalary directly from outside the class because it's protected
