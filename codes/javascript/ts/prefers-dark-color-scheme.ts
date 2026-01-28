const prefersDarkColorScheme = () =>
  window &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

prefersDarkColorScheme(); // true or false