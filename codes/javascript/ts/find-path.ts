const findPath = (obj, val) => {
  let res = [];
  const handler = (o, p) =>
    Object.keys(o).some((k) => {
      res = p.concat(isNaN(Number(k)) ? k : +k);
      return (
        val === o[k] || (o[k] && typeof o[k] === "object" && handler(o[k], res))
      );
    });
  handler(obj, []);
  return res.slice(0, -1);
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
console.log(findPath(data, "targetId")); //[ 'fields', 0, 'fields', 1, 'fields', 0 ]
