const isSessionStorageEnabled = () => {
  try {
    const key = `__storage__test`;
    window.sessionStorage.setItem(key, '');
    window.sessionStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
};

isSessionStorageEnabled(); // true, if sessionStorage is accessible
