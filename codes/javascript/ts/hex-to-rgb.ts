const hexToRGB = (hex: string) => {
  let alpha = false,
    h: string | number = hex.slice(hex.startsWith("#") ? 1 : 0);

  if (h.length === 3) {
    h = [...h].map((x) => x.repeat(2)).join("");
  } else if (h.length === 8) {
    alpha = true;
  }

  h = parseInt(h, 16);

  const letterA = alpha ? "a" : "";
  // r,g,b,a
  const r = h >>> (alpha ? 24 : 16);
  const g = (h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8);
  const b = (h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0);
  const a = alpha ? `,${h & 0x000000ff}` : "";

  return `rgb${letterA}(${r},${g},${b}${a})`;
};

hexToRGB("#27ae60ff"); // 'rgba(39, 174, 96, 255)'
hexToRGB("27ae60"); // 'rgb(39, 174, 96)'
hexToRGB("#fff"); // 'rgb(255, 255, 255)'
