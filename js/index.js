window.$docsify = {
    name: 'code-segment 代码段',
    loadNavbar: true,
    loadNavbar: "./pages/nav.md",
    repo: 'https://github.com/eveningwater/js-code-segment',
    loadSidebar: "./pages/sidebar.md",
    alias: {
        '/.*/sidebar.md': 'pages/sidebar.md',
        '/.*/nav.md': 'pages/nav.md'
    },
    coverpage: "./pages/coverpage.md",
    autoHeader: true,
    mergeNavbar: true,
    plugins: [
        (hook) => {
            var footer = [
                '<hr/>',
                '<footer>',
                `<p>
          MIT Licensed | Copyright © 2020-present&nbsp;&nbsp;<a href="https://github.com/eveningwater">eveningwater</a>&nbsp;
          Proudly published with <a href="https://github.com/docsifyjs/docsify" target="_blank">docsify</a>
        </p>
        `,
                '</footer>'
            ].join('');

            hook.afterEach(function (html) {
                return html + footer;
            });
        },
        (hook, vm) => {
            hook.beforeEach(function (html) {
                const url = 'https://github.com/eveningwater/js-code-segment/blob/master/' + vm.route.file;
                const editHtml = '[📝 EDIT DOCUMENT](' + url + ')';
                return (
                    html + '\n----\n' + 'Last modified {docsify-updated} ' + editHtml
                );
            });
        }
    ],
    search: {
        maxAge: 86400000, // 过期时间，单位毫秒，默认一天
        paths: "auto", // or 'auto'
        placeholder: '请输入需要搜索的内容',
        noData: 'No Results!',
        // 搜索标题的最大程级, 1 - 6
        depth: 6
    },
    count: {
        countable: true,
        fontsize: '0.9em',
        color: 'rgb(90,90,90)',
        language: 'chinese'
    }
}
