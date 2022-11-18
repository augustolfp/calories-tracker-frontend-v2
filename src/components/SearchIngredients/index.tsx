import { useState, useEffect } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { Input, VStack, Box, Flex } from '@chakra-ui/react';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../lib/axios';
import ResultCard from './ResultCard';
import HandleSelectedResult from './HandleSelectedResult';
import { SearchResult } from '../../types';

type Props = {
    mealId: number;
};

export default function SearchIngredients(props: Props) {
    const { token } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const [selectedResult, setSelectedResult] = useState<SearchResult | null>(
        null
    );

    useEffect(() => {
        if (searchTerm !== '') {
            const search = api.get(`/search/${searchTerm}`, token);

            search.then((res) => {
                setSearchResults(res.data.results);
            });
        }
    }, [searchTerm]);

    return (
        <Box layerStyle="card">
            <Box as="h3" textStyle="h3" fontWeight="600">
                Pesquise na tabela
            </Box>
            <DebounceInput
                minLength={3}
                debounceTimeout={300}
                value={searchTerm}
                placeholder="Pesquisar alimento..."
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Flex h="30vh">
                <Box w="300px" h="100%" layerStyle="searchResultContainer">
                    {searchResults &&
                        searchResults.map((result, index) => {
                            return (
                                <Box
                                    key={index}
                                    onClick={() => setSelectedResult(result)}
                                >
                                    <ResultCard
                                        id={result.id}
                                        description={result.description}
                                        selectedResult={selectedResult}
                                    />
                                </Box>
                            );
                        })}
                </Box>
                <Box w="100%" layerStyle="card">
                    <Box>Info nutricional</Box>
                    {selectedResult && (
                        <HandleSelectedResult
                            selectedResult={selectedResult}
                            mealId={props.mealId}
                        />
                    )}
                </Box>
            </Flex>
        </Box>
    );
}
