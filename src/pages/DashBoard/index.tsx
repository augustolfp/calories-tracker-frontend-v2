import { useData } from '../../hooks/useData';
import { useDelete } from '../../hooks/useDelete';
import { Link } from 'react-router-dom';
import {
    Wrap,
    WrapItem,
    Container,
    CircularProgress,
    Box,
    Button,
} from '@chakra-ui/react';
import DayResumeCard from '../../components/DayResumeCard';
import DayForm from '../../components/DayForm';
import FormatDate from '../../utils/FormatDate';

export default function DashBoard() {
    const { isLoading, isFetching, isError, data, status } = useData();
    const { mutate: deleteDay } = useDelete();

    if (isLoading) {
        return (
            <Container maxW="80vw" centerContent py="40px">
                <CircularProgress isIndeterminate size={12} color="purple" />
            </Container>
        );
    }

    if (isError) {
        return <Box>Ocorreu um erro!</Box>;
    }

    return (
        <Container maxW="80vw" centerContent py="40px">
            <Wrap spacing="30px" justify="center">
                <WrapItem layerStyle="card">
                    <DayForm />
                </WrapItem>
                {data?.map((day, index) => {
                    return (
                        <WrapItem
                            position="relative"
                            flexDirection="column"
                            alignItems="center"
                            layerStyle="card"
                            key={index}
                        >
                            <Button
                                position="absolute"
                                right={8}
                                top={8}
                                onClick={() =>
                                    deleteDay({ type: 'day', id: day.id })
                                }
                            >
                                x
                            </Button>
                            <Box mb={6}>
                                <FormatDate day={day.day} />
                            </Box>
                            <Link to={`/day/${day.id}`}>
                                <DayResumeCard {...day} />
                            </Link>
                        </WrapItem>
                    );
                })}
            </Wrap>
        </Container>
    );
}
