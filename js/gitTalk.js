var gitalk = new Gitalk({
    clientID: '754a11f9e6ac62848ba2',
    clientSecret: '582039b375232ff2bd542c3286003440f45f68be',
    repo: 'code-segment',
    owner: 'eveningwater',
    admin: ['eveningwater'],
    distractionFreeMode: false,
    id: MD5(location.href),
    language: 'zh-CN'
});