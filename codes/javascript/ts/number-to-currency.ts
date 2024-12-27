const numberToCurrency = (num: number, format: Intl.LocalesArgument, options: Intl.NumberFormatOptions) =>
    num.toLocaleString(format, options);

numberToCurrency(10000000, 'cmn-Hans-CN', {
    style: 'currency',
    currency: 'CNY'
}); // "￥10,000,000.00"