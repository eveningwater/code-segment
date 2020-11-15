window.$docsify = {
    name: '每日一段js代码',
    loadNavbar: true,
    loadNavbar: "./pages/nav.md",
    repo: 'https://github.com/eveningwater/js-code-segment',
    // loadSidebar: "./pages/sidebar.md",
    // loadSidebar: true,
    subMaxLevel:3,
    alias: {
        // '/.*/sidebar.md': 'pages/sidebar.md',
        // '/.*/nav.md': 'pages/nav.md'
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
    search: 'auto', // 默认值
    search: [
        '/',
        '/pages/sidebar.md',
        '/pages/coverpage.md',
        '/pages/nav.md'
    ],

    // 完整配置参数
    search: {
        maxAge: 86400000, // 过期时间，单位毫秒，默认一天
        paths: [], // or 'auto'
        // 支持本地化
        placeholder: {
            '/zh-cn/': '搜索',
            '/': 'Type to search'
        },
        // 支持本地化
        noData: {
            '/zh-cn/': '找不到结果',
            '/': 'No Results'
        },
        // 搜索标题的最大层级, 1 - 6
        depth: 2,
        hideOtherSidebarContent: false, // 是否隐藏其他侧边栏内容
    },
    count: {
        countable: true,
        fontsize: '0.9em',
        color: 'rgb(90,90,90)',
        language: 'chinese'
    }
}
