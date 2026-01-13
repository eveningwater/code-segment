const padNumber = (n:number,l:number) => `${n}`.padStart(l,'0');

padNumber(1234, 6); // '001234'