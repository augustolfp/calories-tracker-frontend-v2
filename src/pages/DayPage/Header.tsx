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
        <Flex
            direction={['column', 'column', 'row']}
            h={['auto', 'auto', '244px']}
            w={['308px', '400px', '768px', '960px']}
            mb={['10px', '20px']}
        >
            <Box w="full" mb={['10px', '20px', '0']} mr={['0', '0', '20px']}>
                <Box
                    color="pageGreen.500"
                    fontSize={['40px', '50px', '44px', '72px']}
                    fontWeight="700"
                >
                    {props.weekDay}
                </Box>
                <Box
                    color="pageGreen.400"
                    fontSize={['40px', '50px', '44px', '72px']}
                    fontWeight="700"
                >
                    {props.fullDate}
                </Box>
                <Box
                    color="pageGreen.400"
                    fontSize={['12px', '16px', '20px']}
                    fontWeight="600"
                >
                    {props.day.notes
                        ? `Anotações: ${props.day.notes}`
                        : 'Anotações: nenhuma'}
                </Box>
            </Box>
            <DayResumeCard {...props.day} />
        </Flex>
    );
}
