import styled from 'styled-components';
import { useData } from '../../hooks/useData';

export default function DashBoard() {
    const { countedDays: data, isFetching } = useData();
    return (
        <Container>
            {isFetching && <p>Carregando...</p>}
            {data?.map((day, index) => {
                return (
                    <div key={index}>
                        <h1>{day.notes}</h1>
                    </div>
                );
            })}
        </Container>
    );
}

const Container = styled.div``;
