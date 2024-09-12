const parseJSONData = <T>(str: string): T => {
    let res: T = {} as T;
    try {
        res = JSON.parse(str);
    } catch (error) {
       console.error(`[parse data error]:${error}`) 
    }
    return res;
}

// parseJSONData(`{ "name":"eveningwater"}`) // { name:"eveningwater" }