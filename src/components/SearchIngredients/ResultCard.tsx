import { ListItem } from '@chakra-ui/react';
import { SearchResult } from '../../types';

type Props = {
    description: string;
    id: number;
};

export default function ResultCard(props: Props) {
    return (
        <ListItem
            fontSize="14px"
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
