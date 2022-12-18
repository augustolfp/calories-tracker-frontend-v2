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
            <Grid
                templateAreas={[
                    `"searchInterface" "dataPanel"`,
                    null,
                    `"searchInterface dataPanel"`,
                ]}
                gridTemplateRows={['1fr 1fr', null, '296px']}
                gridTemplateColumns={['1fr', null, '2fr 1fr']}
                gridGap="10px"
            >
                <GridItem area={'searchInterface'}>
                    <SearchInterface
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        searchResults={searchResults}
                    />
                </GridItem>
                <GridItem area={'dataPanel'}>
                    <Box></Box>
                </GridItem>
            </Grid>
        </Box>
    );
}
