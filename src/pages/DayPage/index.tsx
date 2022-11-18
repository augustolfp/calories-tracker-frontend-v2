import { useData } from '../../hooks/useData';
import { Container, Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import MealsTab from '../../components/MealsTab';
import formatDate from '../../utils/formatDate';
import Header from './Header';

export default function DayPage() {
    const { data } = useData();
    const { id } = useParams();

    const dayData = data!.find((obj) => obj.id === Number(id));
    const formattedDate = formatDate(dayData!.day);

    return (
        <Container maxW="1200px" h="100vh" centerContent py="40px">
            {dayData && (
                <>
                    <Header
                        day={dayData}
                        fullDate={formattedDate.fullDate}
                        weekDay={formattedDate.weekDay}
                    />
                    <Box w={['308px', '400px', '768px', '960px']}>
                        <MealsTab meals={dayData.dayMeals} dayId={Number(id)} />
                    </Box>
                </>
            )}
        </Container>
    );
}
