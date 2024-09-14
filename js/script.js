const config = [
    '//cdn.bootcdn.net/ajax/libs/docsify/4.13.1/docsify.min.js',
    '//cdn.bootcdn.net/ajax/libs/axios/1.3.6/axios.min.js',
    '/js/index.js',
    '//cdn.bootcdn.net/ajax/libs/docsify/4.13.1/plugins/search.min.js',
    '//cdn.bootcdn.net/ajax/libs/docsify/4.13.1/plugins/zoom-image.min.js',
    '//cdn.jsdelivr.net/npm/docsify-pagination/dist/docsify-pagination.min.js',
    '//cdn.bootcdn.net/ajax/libs/docsify-copy-code/3.0.0/docsify-copy-code.min.js',
    '//cdn.bootcdn.net/ajax/libs/gitalk/1.8.0/gitalk.min.js',
    '//www.eveningwater.com/my-web-projects/js/34/plugins/md5.js',
    '//cdn.bootcdn.net/ajax/libs/docsify/4.13.1/plugins/gitalk.min.js',
    '//cdn.bootcdn.net/ajax/libs/require.js/2.3.6/require.min.js',
    '//cdn.bootcdn.net/ajax/libs/monaco-editor/0.51.0/min/vs/loader.min.js',
    '/js/load-monaco-editor.js',
    '/js/gitTalk.js',
]

function loadScript(url) {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.onload = function () {
            resolve(true);
        };
        script.onerror = function () {
            reject(false);
        };
        document.getElementsByTagName('html')[0].appendChild(script);
    })
}

Promise.all(config.map(loadScript)).then(() => {
 
}).catch(() => {
    console.error("Error loading scripts");
});
