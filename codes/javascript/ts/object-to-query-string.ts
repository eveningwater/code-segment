const objectToQueryString = <T>(queryParameters: Record<string, T>) => queryParameters && typeof queryParameters === 'object' ? Object.entries(queryParameters).reduce((queryString,[key,val]) => {
    const symbol = queryString.length ? '&' : '?';
    queryString += val ? `${symbol}${key}=${val}` : '';
    return queryString;
},'') : '';

objectToQueryString({ page: '1', size: '2kg', key: undefined });