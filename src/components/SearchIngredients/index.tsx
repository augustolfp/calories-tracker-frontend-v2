import { useState, useEffect } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { Input, VStack, Box } from '@chakra-ui/react';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../lib/axios';
import ResultCard from './ResultCard';

export type SearchResult = {
    id: number;
    description: string;
    baseQty: number;
    baseUnit: string;
    proteins: number;
    proteinUnit: string;
    carbs: number;
    carbUnit: string;
    fats: number;
    fatUnit: string;
    kcals: number;
};

export default function SearchIngredients() {
    const { token } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

    useEffect(() => {
        if (searchTerm !== '') {
            const search = api.get(`/search/${searchTerm}`, token);

            search.then((res) => {
                setSearchResults(res.data.results);
            });
        }
    }, [searchTerm]);

    return (
        <>
            <DebounceInput
                minLength={3}
                debounceTimeout={300}
                value={searchTerm}
                placeholder="Pesquisar alimentos"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <VStack>
                {searchResults &&
                    searchResults.map((result, index) => {
                        return <ResultCard key={index} {...result} />;
                    })}
            </VStack>
        </>
    );
}
