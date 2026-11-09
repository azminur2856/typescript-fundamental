// Problem 1: solution
const multiplyValue = (value: number, multiplier: number = 2): number => {
  return value * multiplier;
};

// Testing multiplyValue function
console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));

// Problem 2: solution
const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
};

// Testing processInput function
console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));

// Problem 3: solution
const formatCoordinate = (
  location: readonly [number, number, string],
): string => {
  const [latitude, longitude, locationName] = location;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

// Testing formatCoordinate function
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

// Problem 4: solution
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const combinedArray: T[] = [];

  for (const array of arrays) {
    for (const item of array) {
      combinedArray.push(item);
    }
  }
  return combinedArray;
};

// Testing concatenateArrays function
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));

// Problem 5: solution
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  const popularCourses: Course[] = [];

  for (const course of courses) {
    if (course.students >= minStudents && course.isPublished) {
      popularCourses.push(course);
    }
  }
  return popularCourses;
};

// Testing getPopularCourses function
const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

console.log(getPopularCourses(courses, 80));

// Problem 6: solution
const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  const pluckedValues: T[K][] = [];

  for (const item of items) {
    pluckedValues.push(item[key]);
  }
  return pluckedValues;
};

// Testing pluckValues function
const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));

// Problem 7: solution
class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

// Testing Employee and Manager classes
const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails());
console.log(manager.getRoleInfo());

// Problem 8: solution
const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject): void => {
    if (age >= 18) {
      setTimeout((): void => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};

// Testing validateAgeAsync function
const testAge = async (age: number): Promise<void> => {
  try {
    const result = await validateAgeAsync(age);
    console.log(result);
  } catch (error) {
    console.log(error instanceof Error ? `Error: ${error.message}` : error);
  }
};

testAge(15);
testAge(20);
