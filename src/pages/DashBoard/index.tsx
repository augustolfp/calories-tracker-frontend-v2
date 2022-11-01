import { useData } from '../../hooks/useData';
import {
    Wrap,
    WrapItem,
    Container,
    CircularProgress,
    Box,
} from '@chakra-ui/react';
import DayResumeCard from '../../components/DayResumeCard';

export default function DashBoard() {
    const { isLoading, isFetching, isError, data, status } = useData();

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
                {data?.map((day, index) => {
                    return (
                        <WrapItem layerStyle="card" key={index}>
                            <DayResumeCard {...day} type="vertical" />
                        </WrapItem>
                    );
                })}
            </Wrap>
        </Container>
    );
}
