import { useData } from '../../hooks/useData';
import { Container, Box, Flex } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import MealsTab from '../../components/MealsTab';
import DayResumeCard from '../../components/DayResumeCard';
import formatDate from '../../utils/formatDate';

export default function DayPage() {
    const { data } = useData();
    const { id } = useParams();

    const dayData = data!.find((obj) => obj.id === Number(id));
    const formattedDate = formatDate(dayData!.day);

    return (
        <Container maxW="1200px" h="100vh" centerContent py="40px">
            {dayData && (
                <>
                    <Flex
                        direction={['column', 'column', 'row']}
                        h={['auto', 'auto', '244px']}
                        w={['308px', '400px', '768px', '960px']}
                        mb={['10px', '20px']}
                    >
                        <Box
                            w="full"
                            mb={['10px', '20px', '0']}
                            mr={['0', '0', '20px']}
                        >
                            <Box
                                color="#3db9a2"
                                fontSize={['40px', '50px', '44px', '72px']}
                                fontWeight="700"
                            >
                                {formattedDate.weekDay}
                            </Box>
                            <Box
                                color="#85d0ca"
                                fontSize={['40px', '50px', '44px', '72px']}
                                fontWeight="700"
                            >
                                {formattedDate.fullDate}
                            </Box>
                            <Box
                                color="#85d0ca"
                                fontSize={['12px', '16px', '20px']}
                                fontWeight="600"
                            >
                                {dayData.notes
                                    ? `Anotações: ${dayData.notes}`
                                    : 'Anotações: nenhuma'}
                            </Box>
                        </Box>
                        <DayResumeCard {...dayData} />
                    </Flex>
                    <MealsTab meals={dayData.dayMeals} dayId={Number(id)} />
                </>
            )}
        </Container>
    );
}
