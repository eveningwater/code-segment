const nodeListToArray = <T extends Node>(nodeList: NodeListOf<T>): T[] => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]