const isGeneratorFunction = (val: unknown): val is GeneratorFunction =>
    Object.prototype.toString.call(val) === '[object GeneratorFunction]';

isGeneratorFunction(function () {}); // false
isGeneratorFunction(function* () {}); // true