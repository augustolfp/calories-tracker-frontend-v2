import { useData } from '../../hooks/useData';
import { Container, Box } from '@chakra-ui/react';
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
        <Container maxW="900px" centerContent py="40px">
            {dayData && (
                <>
                    <Box>
                        <Box>{dayData.notes}</Box>
                        <DayResumeCard {...dayData} />
                    </Box>
                    <Box layerStyle="tabBox">
                        <MealsTab meals={dayData.dayMeals} dayId={Number(id)} />
                    </Box>
                </>
            )}
        </Container>
    );
}
