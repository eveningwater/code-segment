const isContainedIn = <T>(a: T[], b: T[]) => {
  for (const v of new Set(a)) {
    if (
      !b.some((e) => e === v) ||
      a.filter((e) => e === v).length > b.filter((e) => e === v).length
    ) {
      return false;
    }
  }
  return true;
};

isContainedIn([1, 4], [2, 4, 1]); // true
