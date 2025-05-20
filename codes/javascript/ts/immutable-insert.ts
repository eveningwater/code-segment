type DataItem = {
  id?: string;
  name?: string;
  fields?: DataItem[];
  length?: number;
  [key: string]: any;
};

type KeyPath = (string | number)[];

const immutableInsert = <T extends DataItem, U>(
  data: T,
  keyPath: KeyPath,
  insertVal: U
) => {
  const deepClone = <U extends DataItem | DataItem[] | null>(obj: U): U => {
    if (obj === null) {
      return null as U;
    }
    let clone = Object.assign({}, obj);
    Object.keys(clone).forEach(
      (key) =>
        (clone[key] =
          typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
    );
    if (Array.isArray(obj)) {
      clone.length = obj.length;
      return Array.from({ ...clone, length: clone.length }) as U;
    }
    return clone;
  };
  const insert = (newData: T, newKeyPath: KeyPath) => {
    const key = newKeyPath.shift()!,
      index = newKeyPath.shift()!,
      len = newKeyPath.length;
    if (len > 0) {
      insert(newData[key][index], newKeyPath);
    } else {
      newData[key].splice(index, 0, insertVal);
    }
    return newData;
  };
  return insert(deepClone(data), keyPath);
};

const data = {
  id: "id0",
  name: "root",
  fields: [
    {
      id: "id1",
      name: "name 1-1",
      fields: [
        {
          id: "id1-1",
          name: "name 1-1",
        },
        {
          id: "id1-2",
          name: "name 1-2",
          fields: [
            {
              id: "targetId",
            },
          ],
        },
      ],
    },
    {
      id: "id2",
      name: "name 2-1",
      fields: [
        {
          id: "id2-1",
          name: "name 2-1",
        },
      ],
    },
  ],
};
console.log(
  immutableInsert(data, ["fields", 0, "fields", 1, "fields", 0], {
    id: "newId",
  })
);
// const newData = {
//   id: "id0",
//   name: "root",
//   fields: [
//     {
//       id: "id1",
//       name: "name 1-1",
//       fields: [
//         {
//           id: "id1-1",
//           name: "name 1-1",
//         },
//         {
//           id: "id1-2",
//           name: "name 1-2",
//           fields: [
//             {
//               id: "newId",
//             },
//             {
//               id: "targetId",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: "id2",
//       name: "name 2-1",
//       fields: [
//         {
//           id: "id2-1",
//           name: "name 2-1",
//         },
//       ],
//     },
//   ],
// };
