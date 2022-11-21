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
import formatDate from '../../utils/formatDate';

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
                <WrapItem
                    layerStyle="card"
                    flexDirection="column"
                    w={['374px', '466px']}
                >
                    <Box as="h1" textStyle="h1" fontWeight="600" mb={6}>
                        Novo dia
                    </Box>
                    <DayForm />
                </WrapItem>
                {data?.map((day, index) => {
                    const formattedDate = formatDate(day.day);
                    return (
                        <WrapItem
                            position="relative"
                            flexDirection="column"
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
                                <Box as="h1" textStyle="h1" fontWeight="600">
                                    {formattedDate.weekDay}
                                </Box>
                                <Box as="h4" textStyle="h4" fontWeight="600">
                                    {formattedDate.fullDate}
                                </Box>
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
