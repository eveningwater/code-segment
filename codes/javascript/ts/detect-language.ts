const detectLanguage = (defaultLang = 'en-US') =>
navigator.language ||
(Array.isArray(navigator.languages) && navigator.languages[0] as string) ||
defaultLang;

detectLanguage(); // 'nl-NL'