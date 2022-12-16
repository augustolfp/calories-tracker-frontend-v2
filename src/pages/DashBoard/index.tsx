import { useData } from '../../hooks/useData';
import { useNavigate } from 'react-router-dom';
import { DeleteIcon } from '@chakra-ui/icons';
import {
    Wrap,
    WrapItem,
    Container,
    CircularProgress,
    Box,
} from '@chakra-ui/react';
import DayResumeCard from '../../components/DayResumeCard';
import DayForm from '../../components/DayForm';
import formatDate from '../../utils/formatDate';
import ConfirmDeleteDialog from '../../components/ConfirmDeleteDialog/ConfirmDeleteDialog';

export default function DashBoard() {
    const navigate = useNavigate();
    const { isLoading, isFetching, isError, data, status } = useData();

    if (isLoading) {
        return (
            <Container centerContent py="40px">
                <CircularProgress
                    isIndeterminate
                    size={12}
                    color="pageGreen.500"
                />
            </Container>
        );
    }

    if (isError) {
        return (
            <Container centerContent py="40px">
                <Box as="h1" textStyle="h3">
                    Ocorreu um erro. Por favor, recarregue a página.
                </Box>
            </Container>
        );
    }

    return (
        <Container maxW="1200px" centerContent py="40px">
            <Wrap spacing="30px" justify="center">
                <WrapItem
                    layerStyle="card"
                    flexDirection="column"
                    justifyContent="space-between"
                    w={['100%', '400px']}
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
                            w={['100%', '400px']}
                            h={[null, '442px']}
                            key={index}
                        >
                            <Box
                                position="absolute"
                                right={8}
                                top={8}
                                minW={0}
                                p={0}
                                m={0}
                                borderRadius="full"
                                bg="pageGreen.500"
                            >
                                <ConfirmDeleteDialog type="day" id={day.id}>
                                    <DeleteIcon h={4} w={4} color="white" />
                                </ConfirmDeleteDialog>
                            </Box>
                            <Box mb={6}>
                                <Box as="h1" textStyle="h1" fontWeight="600">
                                    {formattedDate.weekDay}
                                </Box>
                                <Box as="h4" textStyle="h4" fontWeight="600">
                                    {formattedDate.fullDate}
                                </Box>
                            </Box>
                            <Box
                                w="full"
                                h="full"
                                onClick={() => navigate(`/day/${day.id}`)}
                            >
                                <DayResumeCard {...day} />
                            </Box>
                        </WrapItem>
                    );
                })}
            </Wrap>
        </Container>
    );
}
