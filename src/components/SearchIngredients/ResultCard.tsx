import { Box, VStack } from '@chakra-ui/react';
import { SearchResult } from '../../types';

type Props = {
    description: string;
    id: number;
    selectedResult: SearchResult | null;
};

export default function ResultCard(props: Props) {
    return (
        <Box
            fontSize="14px"
            borderColor={
                props.id === props.selectedResult?.id ? 'purple' : 'none'
            }
            layerStyle="searchResultCard"
        >
            {props.description}
        </Box>
    );
}
