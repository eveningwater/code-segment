/**
 * 将数组按指定条件分组
 */

// 函数重载定义
function groupBy<T, K extends keyof T>(
  arr: T[],
  handler: K
): Record<T[K] extends string | number | symbol ? T[K] : string, T[]>;

function groupBy<T, R extends string | number | symbol>(
  arr: T[],
  handler: (item: T, index: number, array: T[]) => R
): Record<R, T[]>;

// 实现
function groupBy<T>(
  arr: T[],
  handler: string | ((item: T, index: number, array: T[]) => string | number | symbol)
): Record<string | number | symbol, T[]> {
  return arr
    .map((item, index, array) => {
      if (typeof handler === "function") {
        return handler(item, index, array);
      } else {
        return item[handler];
      }
    })
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {} as Record<string | number | symbol, T[]>);
}

// 使用示例
groupBy([6.1, 4.2, 6.3], Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
groupBy(["one", "two", "three"], "length"); // {3: ['one', 'two'], 5: ['three']}

// 更复杂的类型示例
interface User {
  id: number;
  name: string;
  age: number;
  city: string;
}

const users: User[] = [
  { id: 1, name: "Alice", age: 25, city: "Beijing" },
  { id: 2, name: "Bob", age: 30, city: "Shanghai" },
  { id: 3, name: "Charlie", age: 25, city: "Guangzhou" }
];

// 按年龄分组 - 类型推断为 Record<number, User[]>
const groupedByAge = groupBy(users, "age");

// 按城市分组 - 类型推断为 Record<string, User[]>
const groupedByCity = groupBy(users, "city");

// 按自定义函数分组 - 类型推断为 Record<string, User[]>
const groupedByAgeRange = groupBy(users, (user) => 
  user.age < 30 ? "young" : "adult"
);

// 按多个条件分组 - 类型推断为 Record<string, User[]>
const groupedByAgeAndCity = groupBy(users, (user) => 
  `${user.age}-${user.city}`
);

// 数字数组分组 - 类型推断为 Record<number, number[]>
const numbers = [1.1, 1.2, 2.1, 2.2, 3.1];
const groupedNumbers = groupBy(numbers, Math.floor);

// 字符串数组分组 - 类型推断为 Record<number, string[]>
const strings = ["apple", "banana", "cherry", "date"];
const groupedStrings = groupBy(strings, (str) => str.length);

// 混合类型数组分组 - 类型推断为 Record<string, (number | string | object)[]>
const mixed = [1, "hello", { id: 1 }, 2.5, "world"];
const groupedMixed = groupBy(mixed, (item) => typeof item);

// 高级类型示例
interface Product {
  id: string;
  name: string;
  price: number;
  category: "electronics" | "clothing" | "books";
  inStock: boolean;
}

const products: Product[] = [
  { id: "1", name: "iPhone", price: 999, category: "electronics", inStock: true },
  { id: "2", name: "T-shirt", price: 25, category: "clothing", inStock: false },
  { id: "3", name: "Book", price: 15, category: "books", inStock: true }
];

// 按类别分组 - 类型推断为 Record<"electronics" | "clothing" | "books", Product[]>
const groupedByCategory = groupBy(products, "category");

// 按价格范围分组 - 类型推断为 Record<string, Product[]>
const groupedByPriceRange = groupBy(products, (product) => {
  if (product.price < 50) return "budget";
  if (product.price < 200) return "mid-range";
  return "premium";
});

// 按库存状态分组 - 类型推断为 Record<boolean, Product[]>
const groupedByStock = groupBy(products, "inStock");

