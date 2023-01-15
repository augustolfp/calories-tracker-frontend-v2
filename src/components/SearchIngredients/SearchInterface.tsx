import { Box, ListItem, CircularProgress } from '@chakra-ui/react';
import DebouncedInput from './DebouncedInput';
import { SearchResult } from '../../types';

import { List } from '@chakra-ui/react';

type Props = {
    searchTerm: string;
    setSearchTerm: any;
    tacoResults: SearchResult[];
    favoritesResults: SearchResult[];
    selectedResultId: number | string | null;
    setSelectedResult: any;
    isLoading: boolean;
    isError: boolean;
};

export default function SearchInterface(props: Props) {
    function ReturnResults() {
        if (props.isError) {
            return (
                <Box layerStyle="searchResultErrorBox">
                    <Box>Pesquisa falhou :(</Box>
                    <Box>Recarregue a página!</Box>
                </Box>
            );
        }
        if (props.isLoading) {
            return (
                <Box layerStyle="searchResultErrorBox">
                    <CircularProgress
                        isIndeterminate
                        size="60px"
                        color="pageGreen.500"
                    />
                </Box>
            );
        } else if (
            (props.tacoResults || props.favoritesResults) &&
            props.tacoResults.length + props.favoritesResults.length === 0 &&
            props.searchTerm.length > 2
        ) {
            return (
                <Box layerStyle="searchResultErrorBox">
                    <Box>Nenhum resultado encontrado :(</Box>
                </Box>
            );
        } else if (props.tacoResults || props.favoritesResults) {
            return (
                <List layerStyle="searchResultList">
                    {props.favoritesResults.map((result) => {
                        return (
                            <ListItem
                                key={result.id}
                                onClick={() => props.setSelectedResult(result)}
                                layerStyle={
                                    result.id === props.selectedResultId
                                        ? 'searchResultSelectedFavoriteItem'
                                        : 'searchResultFavoriteItem'
                                }
                            >
                                {result.description}
                            </ListItem>
                        );
                    })}
                    {props.tacoResults.map((result) => {
                        return (
                            <ListItem
                                key={result.id}
                                onClick={() => props.setSelectedResult(result)}
                                layerStyle={
                                    result.id === props.selectedResultId
                                        ? 'searchResultSelectedTacoItem'
                                        : 'searchResultTacoItem'
                                }
                            >
                                {result.description}
                            </ListItem>
                        );
                    })}
                </List>
            );
        }
        return null;
    }

    return (
        <Box layerStyle="searchInterface">
            <DebouncedInput
                searchTerm={props.searchTerm}
                setSearchTerm={props.setSearchTerm}
            />
            <ReturnResults />
        </Box>
    );
}
