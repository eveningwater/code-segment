const countOccurrences = <T>(arr: T[], val: T) =>
  arr.reduce((r, v) => (v === val ? r + 1 : r), 0);