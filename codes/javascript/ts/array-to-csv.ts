const arrayToCSV = <T>(arr: T[][], delimiter = ",") =>
  arr
    .map((i) =>
      i
        .map((v) => (typeof v === "string" ? `"${v.replace(/"/g, '""')}"` : v))
        .join(delimiter)
    )
    .join("\n");

arrayToCSV([
  ["a", "b"],
  ["c", "d"],
]); // '"a","b"\n"c","d"'
arrayToCSV(
  [
    ["a", "b"],
    ["c", "d"],
  ],
  ";"
); // '"a";"b"\n"c";"d"'
arrayToCSV([
  ["a", '"b" great'],
  ["c", 3.1415],
]); // '"a","""b"" great"\n"c",3.1415'
