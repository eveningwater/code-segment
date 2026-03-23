const serializeForm = (form: HTMLFormElement) =>
    Array.from(new FormData(form), field =>
        (field as string[]).map(decodeURIComponent).join('=')
    ).join('&');

serializeForm(document.querySelector('.form')!);
// nickname=夕水&password=123456