//* Polymorphism: different employees respond differently to the same method call

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

  calculatePay(taxRate: number): number {
    return this.baseSalary - this.baseSalary * taxRate;
  }
}

class Manager extends Employee {
  // We don't define a constructor here, so the base class constructor is used automatically
  // (JavaScript calls super(...args) for us behind the scenes).
  // If we write our own constructor (e.g. to add new properties), we must call super()
  // with the required parameters before using `this`.

  // The override keyword shows that this method replaces a method from the base class.
  // It is optional by default, but required if "noImplicitOverride" is enabled in tsconfig.
  // It helps the compiler catch errors if the base class has no method with this name
  // (e.g. a typo, or the method was renamed/removed in the base class).
  override calculatePay(): number {
    return this.baseSalary + 5000;
  }
}

class Developer extends Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
    public type: string,
  ) {
    super(name, _baseSalary);
  }

  override calculatePay(taxRate: number): number {
    return this.baseSalary + 3000 - this.baseSalary * taxRate;
  }
}

const employee = new Employee("Azminur", 100000);
const manager = new Manager("Rahman", 100000);
const developer = new Developer("Tusher", 100000, "Backend");

console.log(employee.calculatePay(0.1));
console.log(manager.calculatePay());
console.log(developer.calculatePay(0.1));
