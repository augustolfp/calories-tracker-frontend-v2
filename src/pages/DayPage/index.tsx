import { useData } from '../../hooks/useData';
import { Container, Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import MealsTab from './MealsTab';
import DayResumeCard from '../../components/DayResumeCard';

export default function DayPage() {
    const { data } = useData();
    const { id } = useParams();

    const dayData = data!.find((obj) => obj.id === Number(id));
    return (
        <Container maxW="900px" centerContent py="40px">
            {dayData && (
                <>
                    <Box layerStyle="card">
                        <DayResumeCard {...dayData} type="horizontal" />
                    </Box>
                    <Box layerStyle="card">
                        <MealsTab meals={dayData.dayMeals} dayId={Number(id)} />
                    </Box>
                </>
            )}
        </Container>
    );
}
