import { useData } from '../../hooks/useData';
import { Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import MealList from './MealList';
import DayResumeCard from '../../components/DayResumeCard';

export default function DayPage() {
    const { data } = useData();
    const { id } = useParams();

    const dayData = data!.find((obj) => obj.id === Number(id));

    return (
        <Container maxW="900px" centerContent py="40px">
            {dayData && (
                <>
                    <DayResumeCard {...dayData} />
                    {dayData.dayMeals ? (
                        <MealList {...dayData.dayMeals} />
                    ) : (
                        <h5>Nenhuma refeição ainda!</h5>
                    )}
                </>
            )}
        </Container>
    );
}
