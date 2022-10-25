import { useData } from '../../hooks/useData';
import { Wrap, WrapItem, Container, CircularProgress } from '@chakra-ui/react';
import DayCard from './DayCard';

export default function DashBoard() {
    const { data, isFetching } = useData();
    return (
        <Container maxW="80vw" centerContent py="40px">
            {isFetching ? (
                <CircularProgress isIndeterminate size={12} color="purple" />
            ) : (
                <Wrap spacing="30px" justify="center">
                    {data?.map((day, index) => {
                        return (
                            <WrapItem key={index}>
                                <DayCard {...day} />
                            </WrapItem>
                        );
                    })}
                </Wrap>
            )}
        </Container>
    );
}
