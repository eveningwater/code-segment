const flags = <T>(arr: T[]) =>
  arr.reduce((acc, item) => ({ ...acc, [`${item}`]: true }), {});
flags(["red", "green"]); // { red: true, green: true }
