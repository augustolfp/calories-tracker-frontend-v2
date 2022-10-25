import { useData } from '../../hooks/useData';
import { Wrap, WrapItem, Container } from '@chakra-ui/react';
import DayCard from './DayCard';

export default function DashBoard() {
    const { data, isFetching } = useData();
    return (
        <Container maxW="80vw" centerContent py="40px">
            {isFetching && <p>Carregando...</p>}
            <Wrap spacing="30px" justify="center">
                {data?.map((day, index) => {
                    return (
                        <WrapItem key={index} bg="blue" m={4} p={4}>
                            <DayCard {...day} />
                        </WrapItem>
                    );
                })}
            </Wrap>
        </Container>
    );
}
