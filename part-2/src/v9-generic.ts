const wrapInArray = <T>(value: T) => {
  return [value];
};

const stringArray = wrapInArray<string>("ABC");
const numberArray = wrapInArray<number>(123);

console.log(stringArray); // Output: ["ABC"]
console.log(numberArray); // Output: [123]

stringArray.map((item) => item.toUpperCase());

interface User {
  name: string;
  role: string;
}

interface Blog {
  title: string;
  description: string;
  date: string;
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
}

type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;

const userRes: UserResponse = {
  statusCode: 200,
  success: true,
  data: {
    name: "Azminur Rahman",
    role: "Admin",
  },
};
