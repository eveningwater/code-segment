const formToObject = (form: HTMLFormElement) =>
  Array.from(new FormData(form)).reduce(
    (acc, [k, v]) => ({ ...acc, [k]: v }),
    {}
  );
formToObject(document.querySelector("#form")!);
// { email: 'test@email.com', name: 'Test Name' }
