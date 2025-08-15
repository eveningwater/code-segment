const insertAt = <T>(arr: T[], i: number, ...v: T[]) => {
  if (!Array.isArray(arr)) {
    return console.error("First argument should be an array!");
  }
  if (typeof i !== "number" || (i | 0) !== i) {
    return console.error("Second argument should be an inter index!");
  }
  arr.splice(i + 1, 0, ...v);
  return arr;
};

let myArray = [1, 2, 3, 4];
insertAt(myArray, 2, 5); // myArray = [1, 2, 3, 5, 4]

let otherArray = [2, 10];
insertAt(otherArray, 0, 4, 6, 8); // otherArray = [2, 4, 6, 8, 10]
