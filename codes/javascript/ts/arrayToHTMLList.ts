const arrayToHTMLList = (arr: string[], listId: string) => {
    const list = document.querySelector<HTMLUListElement>(`#${listId}`);
    if (!list) {
        return;
    }
    list.innerHTML = arr.map(item => `<li>${item}</li>`).join('');
    return list;
};

arrayToHTMLList(['item 1', 'item 2'], 'myListID'); //生成一个<ul></ul>无序列表