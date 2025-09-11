const isISOString = (val: string) => {
  const d = new Date(val);
  return !Number.isNaN(d.valueOf() && d.toISOString() === val);
};

isISOString("2020-10-12T10:10:10.000Z"); // true
isISOString("2020-10-12"); // false
