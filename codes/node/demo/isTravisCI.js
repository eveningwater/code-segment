const isTravisCI = () => 'TRAVIS' in process.env && 'CI' in process.env;
console.log(isTravisCI());
