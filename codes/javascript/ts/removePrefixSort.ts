const delPrefix = (item: string) => item.replace(/^(xtt|code|js)-/, '');
const removePrefixSort = (sortArr: string[]) => sortArr.sort((a, b) => (delPrefix(a) > delPrefix(b) ? 1 : -1));
removePrefixSort([
    'xtt-sort',
    'code-clear',
    'js-array',
    'node',
    'code-echo',
    'js-symbol',
    'css',
    'xtt-romove'
]);
// ['js-array', 'code-clear', 'css', 'code-echo', 'node', 'xtt-romove', 'xtt-sort', 'js-symbol']