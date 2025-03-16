const dayName = (date: Date, locale?: Intl.LocalesArgument) =>
    date.toLocaleDateString(locale, { weekday: 'long' });

dayName(new Date()); //星期四
dayName(new Date('09/23/2020'), 'de-DE'); //Mittwoch（德语，星期三的意思）