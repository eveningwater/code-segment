const changeLightness = (delta: string, hsl: string) => {
  const [hue, saturation, lightness] = hsl.match(/\d+/g)?.map(Number) || [
    0, 0, 0,
  ];
  const newLightness = Math.max(
    0,
    Math.min(100, lightness + parseFloat(delta))
  );
  return `hsl(${hue},${saturation}%,${newLightness}%)`;
};

changeLightness('10', 'hsl(330, 50%, 50%)'); // 'hsl(330, 50%, 60%)'
changeLightness('-10', 'hsl(330, 50%, 50%)'); // 'hsl(330, 50%, 40%)'