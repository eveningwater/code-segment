const join = <T>(arr: T[], separator = ",", end = separator) =>
  arr.reduce(
    (acc, val, i) =>
      i == arr.length - 2
        ? acc + val + end
        : i === arr.length - 1
        ? acc + val
        : acc + val + separator,
    ""
  );

join(["pen", "pineapple", "apple", "pen"], ",", "&"); // 'pen,pineapple,apple&pen'
join(["pen", "pineapple", "apple", "pen"], ","); // 'pen,pineapple,apple,pen'
join(["pen", "pineapple", "apple", "pen"]); // 'pen,pineapple,apple,pen'
