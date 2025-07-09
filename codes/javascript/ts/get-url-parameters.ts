const getURLParameters = (url: string) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce<Record<string, string>>(
    (a, v) => (
      (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    ),
    {}
  );

getURLParameters("google.com"); // {}
getURLParameters("http://url.com/page?name=Adam&surname=Smith");
// {name: 'Adam', surname: 'Smith'}
