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
    const { searchTerm, setSearchTerm, searchResults } = useSearch();
    const [selectedResult, setSelectedResult] = useState<SearchResult | null>(
        null
    );

    return (
        <Box layerStyle="ingCreatorCard">
            <Box as="h3" textStyle="h3" fontWeight="600" w="full">
                Pesquise na tabela
            </Box>
            <SearchInterface
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                searchResults={searchResults}
                selectedResultId={selectedResult ? selectedResult.id : null}
                setSelectedResult={setSelectedResult}
            />
            <HandleSelectedResult
                selectedResult={selectedResult ? selectedResult : null}
                mealId={props.mealId}
            />
        </Box>
    );
}
