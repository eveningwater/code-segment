const parseJSONData = <T>(str: string): T => {
    let res: T = {} as T;
    try {
        res = JSON.parse(str);
    } catch (error) {
       console.error(`[parse data error]:${error}`) 
    }
    return res;
}
// 指定返回值类型
parseJSONData<Record<string, string>>(`{ "name":"eveningwater"}`); // { name:"eveningwater" }
// 指定返回值类型
parseJSONData<string | number []>(`["eveningwater",1]`); // ["eveningwater", 1]