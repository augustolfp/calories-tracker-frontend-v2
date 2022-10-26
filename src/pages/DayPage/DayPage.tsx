import { Day, useData } from '../../hooks/useData';
import { Container, Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import DayTable from './DayTable';
import FormatDate from '../../components/FormatDate';

export default function DayPage() {
    const { data } = useData();
    const { id } = useParams();

    const dayData = data!.find((obj) => obj.id === Number(id));

    return (
        <Container maxW="80vw" minW="400px" centerContent py="40px">
            {dayData && (
                <>
                    <Box as="h2" textStyle="h2">
                        <FormatDate day={dayData.day} />
                    </Box>
                    <DayTable {...dayData} />
                </>
            )}
        </Container>
    );
}
