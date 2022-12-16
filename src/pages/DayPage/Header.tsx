import { Box, Flex } from '@chakra-ui/react';
import DayResumeCard from '../../components/DayResumeCard';
import { Day } from '../../types';

type Props = {
    day: Day;
    fullDate: string;
    weekDay: string;
};

export default function Header(props: Props) {
    return (
        <Box layerStyle="dayPageHeadersContainer">
            <Box>
                <Box layerStyle="dayPageH1">{props.weekDay}</Box>
                <Box layerStyle="dayPageH2">{props.fullDate}</Box>
                <Box layerStyle="dayPageH3">
                    {props.day.notes
                        ? `Anotações: ${props.day.notes}`
                        : 'Anotações: nenhuma'}
                </Box>
            </Box>
            <DayResumeCard {...props.day} />
        </Box>
    );
}
