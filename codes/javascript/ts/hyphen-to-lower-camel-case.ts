const hyphenToLowerCamelCase = (arg: string, hyphen?: string) => {
    let arr = arg.split(hyphen || '-');
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    }
    return arr.join('');
}

const hyphenToLowerCamelCaseReg = (arg: string, hyphen?: string) => {
    const reg = new RegExp((hyphen || '-') + '[a-zA-Z]', 'g');
    return arg.replace(reg, rep => rep.charAt(1).toUpperCase());
}

hyphenToLowerCamelCase('class-last-name'); // classLastName
hyphenToLowerCamelCase('class_last_name', '_'); // classLastName