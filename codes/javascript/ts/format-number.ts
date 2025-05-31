const formatNumber = (num: number) => num.toLocaleString();

formatNumber(123456); // '123,456' in `en-US`
formatNumber(15675436903); // '15.675.436.903' in `de-DE`
