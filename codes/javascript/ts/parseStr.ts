export enum parseStrType {
    EVAL = 'eval',
    JSON = 'json'
}
const parseStr = <T>(str: string, type: parseStrType = parseStrType.JSON) => {
    const parseMethod = {
        [parseStrType.EVAL]: <T>(v: string): T => new Function(`return ${v}`)(),
        [parseStrType.JSON]: JSON.parse
    }
    let res: T | null = null;
    try {
        const method = parseMethod[type];
        if(method){
            res = method(str);
        }
    } catch (error) {
        console.error(`[parse data error]:${error}`);
    }
    return res;
}