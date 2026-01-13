const pad = (str: string,length: number,char = ' ') => str.padStart((str.length + length) / 2,char).padEnd(length,char);

pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'