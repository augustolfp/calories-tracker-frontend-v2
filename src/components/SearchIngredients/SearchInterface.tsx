import { Box } from '@chakra-ui/react';
import DebouncedInput from './DebouncedInput';
import { SearchResult } from '../../types';
import ResultCard from './ResultCard';

import { List } from '@chakra-ui/react';

type Props = {
    searchTerm: string;
    setSearchTerm: any;
    searchResults: SearchResult[];
};

export default function SearchInterface(props: Props) {
    return (
        <Box layerStyle="searchInterface" position="relative" overflow="auto">
            <DebouncedInput
                searchTerm={props.searchTerm}
                setSearchTerm={props.setSearchTerm}
            />
            <List layerStyle="searchResultList">
                {props.searchResults &&
                    props.searchResults.map((result, index) => {
                        return (
                            <Box key={index}>
                                <ResultCard
                                    id={result.id}
                                    description={result.description}
                                />
                            </Box>
                        );
                    })}
            </List>
        </Box>
    );
}
