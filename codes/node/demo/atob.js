const atob = str => Buffer.from(str, 'base64').toString('binary');
console.log(atob('Zm9vYmFy'));
