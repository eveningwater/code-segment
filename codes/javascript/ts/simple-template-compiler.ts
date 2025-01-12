const simpleTemplateCompiler = (template: string) => <T extends unknown>(data: T) =>
    template.replace(/\{\{(.*?)\}\}/g, (_match, key) => data[key.trim()]);

simpleTemplateCompiler('{{ year }}-{{ month }}-{{ day }}')({
    year: '2021',
    month: '06',
    day: '08'
});