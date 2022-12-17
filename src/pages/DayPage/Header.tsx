import { Box, SimpleGrid } from '@chakra-ui/react';
import DayResumeCard from '../../components/DayResumeCard';
import { Day } from '../../types';

type Props = {
    day: Day;
    fullDate: string;
    weekDay: string;
};

export default function Header(props: Props) {
    return (
        <SimpleGrid
            columns={[1, 1, 2]}
            spacing="20px"
            layerStyle="dayPageHeadersContainer"
        >
            <Box>
                <Box layerStyle="dayPageH1">{props.weekDay}</Box>
                <Box layerStyle="dayPageH2">{props.fullDate}</Box>
                <Box layerStyle="dayPageH3">
                    {props.day.notes
                        ? `Anotações: ${props.day.notes}`
                        : 'Anotações: nenhuma'}
                </Box>
            </Box>
            <Box h="100%" w="100%">
                <DayResumeCard {...props.day} />
            </Box>
        </SimpleGrid>
    );
}
