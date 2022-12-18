import { useAuth } from './useAuth';
import { api } from '../lib/axios';
import { useState, useEffect } from 'react';
import { SearchResult } from '../types';

export function useSearch() {
    const { authHeader } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

    useEffect(() => {
        if (searchTerm !== '') {
            const search = api.get(`/search/${searchTerm}`, authHeader);

            search.then((res) => {
                setSearchResults(res.data.results);
            });
        }
    }, [searchTerm]);

    return { searchTerm, setSearchTerm, searchResults };
}
