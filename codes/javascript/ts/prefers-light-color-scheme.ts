
const prefersLightColorScheme = () =>
  window &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: light)').matches;

prefersLightColorScheme(); // true or false