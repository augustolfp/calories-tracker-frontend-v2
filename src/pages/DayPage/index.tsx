import { Day, useData } from '../../hooks/useData';
import { Container, Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import DayTable from './DayTable';
import FormatDate from '../../components/FormatDate';
import MealAccordion from './MealAccordion';

export default function DayPage() {
    const { data } = useData();
    const { id } = useParams();

    const dayData = data!.find((obj) => obj.id === Number(id));

    return (
        <Container maxW="900px" centerContent py="40px">
            {dayData && (
                <>
                    <Box textStyle="h2">
                        <FormatDate day={dayData.day} />
                    </Box>
                    <DayTable {...dayData} />
                    {dayData.dayMeals ? (
                        <MealAccordion {...dayData.dayMeals} />
                    ) : (
                        <h5>Nenhuma refeição ainda!</h5>
                    )}
                </>
            )}
        </Container>
    );
}
