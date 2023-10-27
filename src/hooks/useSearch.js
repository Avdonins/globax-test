import React, { useMemo } from 'react';

const useSearch = (query) => useMemo(() => {
    if(!query) return 'http://127.0.0.1:3000';
    return `http://127.0.0.1:3000?term=${query}`;
}, [query]);

export default useSearch;