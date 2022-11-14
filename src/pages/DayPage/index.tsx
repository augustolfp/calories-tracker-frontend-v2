import { useData } from '../../hooks/useData';
import { Container, Box, Flex } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import MealsTab from './MealsTab';
import DayResumeCard from '../../components/DayResumeCard';
import formatDate from '../../utils/formatDate';

export default function DayPage() {
    const { data } = useData();
    const { id } = useParams();

    const dayData = data!.find((obj) => obj.id === Number(id));
    const formattedDate = formatDate(dayData!.day);

    return (
        <Container maxW="1200px" centerContent py="40px">
            {dayData && (
                <>
                    <Flex
                        direction={['column', 'column', 'row']}
                        h={['auto', 'auto', '244px']}
                        w={['308px', '400px', '768px', '960px']}
                        mb={['10px', '20px']}
                    >
                        <Box
                            bg="blue"
                            w="full"
                            mb={['10px', '20px', '0']}
                            mr={['0', '0', '20px']}
                        >
                            <Box>{dayData.notes}</Box>
                            <Box>{formattedDate.weekDay}</Box>
                            <Box>{formattedDate.fullDate}</Box>
                        </Box>
                        <DayResumeCard {...dayData} />
                    </Flex>
                    <Box layerStyle="tabBox">
                        <MealsTab meals={dayData.dayMeals} dayId={Number(id)} />
                    </Box>
                </>
            )}
        </Container>
    );
}
