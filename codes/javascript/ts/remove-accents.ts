const removeAccents = (str: string) =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

removeAccents('Antoine de Saint-Exupéry'); // 'Antoine de Saint-Exupery'