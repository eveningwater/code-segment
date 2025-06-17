const get = <T>(from: Record<PropertyKey, T>, ...selectors: string[]) =>
  [...selectors]
    .filter((s) => typeof s === "string")
    .map((s) =>
      s
        .replace(/\[([^\[\]]*)\]/g, ".$1.")
        .split(".")
        .filter((t) => t !== "")
        .reduce(
          (prev, cur) =>
            prev && (prev[cur] as unknown as Record<PropertyKey, T>),
          from
        )
    );
const obj = {
  selector: { to: { val: "val to select" } },
  target: [1, 2, { a: "test" }],
};
get(obj, "selector.to.val", "target[0]", "target[2].a");
// ['val to select', 1, 'test']
