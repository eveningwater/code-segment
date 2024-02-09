const hasFlags = (...flags) =>
  flags.every(flag =>
    process.argv.includes(/^-{1,2}/.test(flag) ? flag : '--' + flag)
  );
console.log(hasFlags('-s'));
console.log(hasFlags('--test', 'cool=true', '-s'));
console.log(hasFlags('special'));
