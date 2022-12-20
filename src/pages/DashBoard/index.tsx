import { useData } from '../../hooks/useData';
import { useNavigate } from 'react-router-dom';
import { DeleteIcon } from '@chakra-ui/icons';
import { Wrap, WrapItem, CircularProgress, Box } from '@chakra-ui/react';
import DayResumeCard from '../../components/DayResumeCard';
import DayForm from '../../components/DayForm';
import formatDate from '../../utils/formatDate';
import ConfirmDeleteDialog from '../../components/ConfirmDeleteDialog/ConfirmDeleteDialog';

export default function DashBoard() {
    const navigate = useNavigate();
    const { isLoading, isError, data } = useData();

    if (isLoading) {
        return (
            <CircularProgress isIndeterminate size={12} color="pageGreen.500" />
        );
    }

    if (isError) {
        return (
            <Box as="h1" textStyle="h3">
                Ocorreu um erro. Por favor, recarregue a página.
            </Box>
        );
    }

    return (
        <Wrap
            layerStyle="dashboardCardsContainer"
            spacing="30px"
            justify="center"
        >
            <WrapItem layerStyle="dashBoardCard">
                <Box as="h1" mb={6}>
                    Novo dia
                </Box>
                <DayForm />
            </WrapItem>
            {data?.map((day, index) => {
                const formattedDate = formatDate(day.day);
                return (
                    <WrapItem layerStyle="dashBoardCard" key={index}>
                        <Box layerStyle="deleteDayBox">
                            <ConfirmDeleteDialog type="day" id={day.id}>
                                <DeleteIcon h={4} w={4} color="white" />
                            </ConfirmDeleteDialog>
                        </Box>
                        <Box mb={6}>
                            <Box as="h1">{formattedDate.weekDay}</Box>
                            <Box as="h4">{formattedDate.fullDate}</Box>
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
    );
}
