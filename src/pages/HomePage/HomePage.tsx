import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <Container>
            <h1>Home page!</h1>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/sign-in">Sign-in</Link>
            <Link to="sign-up">Sign-up</Link>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
