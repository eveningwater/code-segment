const requireUncached = module => {
  delete require.cache(require.resolve(module));
  return require(module);
};

const fs = requireUncached('fs'); // 'fs' will be loaded fresh every time

console.log(fs);