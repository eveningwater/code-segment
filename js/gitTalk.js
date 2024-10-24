var gitalk = new Gitalk({
  clientID: '763157b9e518e0cced84',
  clientSecret: '5974220596729ed58d76c7e66845d23448b1390b',
  repo: 'code-segment',
  owner: 'eveningwater',
  admin: ['eveningwater'],
  distractionFreeMode: false,
  id: MD5(location.href),
  language: 'zh-CN'
});
