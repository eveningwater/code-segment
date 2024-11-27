const isValidJSON = <T extends string>(val: T) => {
    try {
        const res = JSON.parse(val);
        // JSON.parse('null') => null
        return res !== null ? true : false;
    } catch (error) {
        return false;
    }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(''); // true