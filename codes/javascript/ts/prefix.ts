const prefix = (prop: string) => {
  const capitalizedProp = prop.charAt(0).toUpperCase() + prop.slice(1);
  const prefixes = ["", "webkit", "moz", "ms", "o"];
  const i = prefixes.findIndex(
    (prefix) =>
      typeof (document.body.style as any)[prefix ? prefix + capitalizedProp : prop] !==
      "undefined",
  );
  return i !== -1 ? (i === 0 ? prop : prefixes[i] + capitalizedProp) : null;
};

prefix("appearance");
// 'appearance' on a supported browser, otherwise 'webkitAppearance', 'mozAppearance', 'msAppearance' or 'oAppearance'
