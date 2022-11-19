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
            borderColor={
                props.id === props.selectedResult?.id ? 'purple' : 'none'
            }
        >
            {props.description}
        </ListItem>
    );
}
