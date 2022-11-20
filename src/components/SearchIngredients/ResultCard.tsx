import { ListItem } from '@chakra-ui/react';
import { SearchResult } from '../../types';

type Props = {
    description: string;
    id: number;
    selectedResult: SearchResult | null;
};

export default function ResultCard(props: Props) {
    return (
        <ListItem
            fontSize="14px"
            fontWeight={props.id === props.selectedResult?.id ? '700' : '400'}
            w="90%"
            borderStyle="none none solid none"
            borderWidth="1px"
            borderColor="pageGreen.400"
            color="pageGreen.500"
        >
            {props.description}
        </ListItem>
    );
}
