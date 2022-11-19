import { useState, useEffect } from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../lib/axios';
import HandleSelectedResult from './HandleSelectedResult';
import { SearchResult } from '../../types';
import SearchInterface from './SearchInterface';

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
            <Grid
                templateAreas={`"searchInterface dataPanel"`}
                gridTemplateRows="400px"
                gridTemplateColumns="2fr 1fr"
                gridGap="10px"
            >
                <GridItem area={'searchInterface'}>
                    <SearchInterface
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        searchResults={searchResults}
                        setSearchResults={setSearchResults}
                        selectedResult={selectedResult}
                        setSelectedResult={setSelectedResult}
                    />
                </GridItem>
                <GridItem area={'dataPanel'}>
                    <Box>
                        {selectedResult && (
                            <HandleSelectedResult
                                selectedResult={selectedResult}
                                mealId={props.mealId}
                            />
                        )}
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
}
