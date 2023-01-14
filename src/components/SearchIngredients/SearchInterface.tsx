import { Box, ListItem, CircularProgress } from '@chakra-ui/react';
import DebouncedInput from './DebouncedInput';
import { SearchResult } from '../../types';

import { List } from '@chakra-ui/react';

type Props = {
    searchTerm: string;
    setSearchTerm: any;
    tacoResults: SearchResult[];
    selectedResultId: number | null;
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
            props.tacoResults &&
            props.tacoResults.length === 0 &&
            props.searchTerm.length > 2
        ) {
            return (
                <Box layerStyle="searchResultErrorBox">
                    <Box>Nenhum resultado encontrado :(</Box>
                </Box>
            );
        } else if (props.tacoResults) {
            return (
                <List layerStyle="searchResultList">
                    {props.tacoResults.map((result, index) => {
                        return (
                            <ListItem
                                key={index}
                                onClick={() => props.setSelectedResult(result)}
                                layerStyle={
                                    result.id === props.selectedResultId
                                        ? 'searchResultSelectedItem'
                                        : 'searchResultItem'
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
