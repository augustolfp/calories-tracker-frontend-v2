import { Box } from '@chakra-ui/react';
import HandleSelectedResult from './HandleSelectedResult';
import SearchInterface from './SearchInterface';
import { useSearch } from '../../hooks/useSearch';
import { SearchResult } from '../../types';
import { useState } from 'react';

type Props = {
    mealId: number;
};

export default function SearchIngredients(props: Props) {
    const { searchTerm, setSearchTerm, searchResults, isLoading, isError } =
        useSearch();
    const [selectedResult, setSelectedResult] = useState<SearchResult | null>(
        null
    );

    return (
        <Box layerStyle="ingCreatorCard">
            <Box as="h2">Pesquise na tabela</Box>
            <Box>
                <SearchInterface
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    searchResults={searchResults}
                    selectedResultId={selectedResult ? selectedResult.id : null}
                    setSelectedResult={setSelectedResult}
                    isLoading={isLoading}
                    isError={isError}
                />
            </Box>
            <HandleSelectedResult
                selectedResult={selectedResult ? selectedResult : null}
                setSelectedResult={setSelectedResult}
                setSearchTerm={setSearchTerm}
                mealId={props.mealId}
            />
        </Box>
    );
}
