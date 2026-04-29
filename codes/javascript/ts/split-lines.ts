const splitLines = (str: string) => str.split(/\r?\n/);

splitLines('This\nis a\nmultiline\nstring.\n');
// ['This', 'is a', 'multiline', 'string.' , '']