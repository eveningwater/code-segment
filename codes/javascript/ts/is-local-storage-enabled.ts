const isLocalStorageEnabled = () => {
  try {
    const key = `__storage__test`;
    window.localStorage.setItem(key, "");
    window.localStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
};

isLocalStorageEnabled(); // true, if localStorage is accessible
