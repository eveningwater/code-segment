const round = (n: number, decimals = 0) =>
  Number(`${Math.round(+`${n}e${decimals}`)}e-${decimals}`);

round(1.005, 2); // 1.01