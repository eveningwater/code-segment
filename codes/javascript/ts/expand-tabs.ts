const expandTabs = (str: string, count: number) =>
  str.replace(/\t/g, " ".repeat(count));

expandTabs("\t\tlorem", 3); // '      lorem'
