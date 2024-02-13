var gitalk = new Gitalk({
  clientID: '763157b9e518e0cced84',
  clientSecret: 'a69f652d1c0c1f9a7ca0ed1cc6361e049a72e361',
  repo: 'code-segment',
  owner: 'eveningwater',
  admin: ['eveningwater'],
  distractionFreeMode: false,
  id: MD5(location.href),
  language: 'zh-CN'
});
