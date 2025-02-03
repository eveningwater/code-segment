const byteSize = (str: string) => new Blob([str]).size;

byteSize('😀'); // 4
byteSize('Hello World'); // 11