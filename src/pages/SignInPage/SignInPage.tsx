import { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth';

export default function SignInPage() {
    const { login, loading, isLoggedIn, errMsg } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);

    async function handleLogin(e: any) {
        e.preventDefault();
        await login(email, password);
    }

    return (
        <Container>
            <h1>Sign-in Page!</h1>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                        disabled={loading}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="senha"
                        disabled={loading}
                        required
                    />
                    <button type="submit" disabled={loading}>
                        ENTRAR
                    </button>
                </form>
            )}
            {errMsg && <ErrorContainer>Falha no login!</ErrorContainer>}
            {isLoggedIn && (
                <SuccessContainer>Você está logado!</SuccessContainer>
            )}
        </Container>
    );
}

const Container = styled.div``;

const ErrorContainer = styled.div`
    color: red;
`;

const SuccessContainer = styled.div`
    color: green;
`;
