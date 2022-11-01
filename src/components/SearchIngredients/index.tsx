import { useState, useEffect } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { Input, VStack, Box } from '@chakra-ui/react';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../lib/axios';

export default function SearchIngredients() {
    const { token } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

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
                        return <Box key={index}>{JSON.stringify(result)}</Box>;
                    })}
            </VStack>
        </>
    );
}
