import { Box, ListItem } from '@chakra-ui/react';
import DebouncedInput from './DebouncedInput';
import { SearchResult } from '../../types';

import { List } from '@chakra-ui/react';

type Props = {
    searchTerm: string;
    setSearchTerm: any;
    searchResults: SearchResult[];
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
                                layerStyle="searchResultListItem"
                            >
                                {result.description}
                            </ListItem>
                        );
                    })}
            </List>
        </Box>
    );
}
