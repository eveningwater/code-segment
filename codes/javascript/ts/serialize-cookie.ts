type SerializeCookieSNB = string | number | boolean;
const serializeCookie = (name: SerializeCookieSNB, val: SerializeCookieSNB) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie('foo', 'bar'); // 'foo=bar'