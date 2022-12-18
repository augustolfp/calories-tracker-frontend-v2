import { useState } from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import HandleSelectedResult from './HandleSelectedResult';
import SearchInterface from './SearchInterface';
import { useSearch } from '../../hooks/useSearch';
import { SearchResult } from '../../types';

type Props = {
    mealId: number;
};

export default function SearchIngredients(props: Props) {
    const { searchTerm, setSearchTerm, searchResults } = useSearch();

    return (
        <Box layerStyle="ingCreatorCard">
            <Box as="h3" textStyle="h3" fontWeight="600" w="full">
                Pesquise na tabela
            </Box>
            <SearchInterface
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                searchResults={searchResults}
            />
        </Box>
    );
}
