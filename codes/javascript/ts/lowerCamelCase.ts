const lowerCamelCase = (arg: string, hyphen?: string) => {
    let arr = arg.split(hyphen || '-');
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    }
    return arr.join('');
}

const lowerCamelCaseReg = (arg: string, hyphen?: string) => {
    const reg = new RegExp((hyphen || '-') + '[a-zA-Z]', 'g');
    return arg.replace(reg, rep => rep.charAt(1).toUpperCase());
}

lowerCamelCase('class-last-name'); // classLastName
lowerCamelCase('class_last_name', '_'); // classLastName