import { Box, ListItem } from '@chakra-ui/react';
import DebouncedInput from './DebouncedInput';
import { SearchResult } from '../../types';

import { List } from '@chakra-ui/react';

type Props = {
    searchTerm: string;
    setSearchTerm: any;
    searchResults: SearchResult[];
    selectedResultId: number | null;
    setSelectedResult: any;
};

export default function SearchInterface(props: Props) {
    return (
        <Box layerStyle="searchInterface">
            <DebouncedInput
                searchTerm={props.searchTerm}
                setSearchTerm={props.setSearchTerm}
            />
            <List layerStyle="searchResultList">
                {props.searchResults &&
                    props.searchResults.map((result, index) => {
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
        </Box>
    );
}
