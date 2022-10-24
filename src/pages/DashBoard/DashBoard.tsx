import styled from 'styled-components';
import { useData } from '../../hooks/useData';
import { useAuth } from '../../hooks/useAuth';

export default function DashBoard() {
    const { isLoggedIn, token } = useAuth();
    const { data, isFetching } = useData();
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
