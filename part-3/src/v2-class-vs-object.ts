class Employee {
  name: string;
  baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
}

const employee = new Employee("Azminur", 100000);
const employee2 = new Employee("Rahman", 100000);

console.log(employee instanceof Employee); // Output: true
console.log(employee2 instanceof Employee); // Output: true
