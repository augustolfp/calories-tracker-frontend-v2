import { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth';
import { Flex, Input, Button, Image, Heading } from '@chakra-ui/react';
import bananaIcon from '../../../public/icon.svg';

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
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Image boxSize="sm" src={bananaIcon} alt="banana logo" />
            <Flex direction="column" p={12} rounded={6}>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <form onSubmit={handleLogin}>
                        <Input
                            variant="filled"
                            mb={3}
                            type="email"
                            name="email"
                            focusBorderColor="purple.400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email"
                            disabled={loading}
                            required
                        />
                        <Input
                            variant="filled"
                            mb={3}
                            type="password"
                            name="password"
                            focusBorderColor="purple.400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="senha"
                            disabled={loading}
                            required
                        />
                        <Button
                            colorScheme="purple"
                            mb={6}
                            type="submit"
                            disabled={loading}
                        >
                            ENTRAR
                        </Button>
                    </form>
                )}
                {errMsg && <ErrorContainer>Falha no login!</ErrorContainer>}
                {isLoggedIn && (
                    <SuccessContainer>Você está logado!</SuccessContainer>
                )}
            </Flex>
        </Flex>
    );
}

const Container = styled.div``;

const ErrorContainer = styled.div`
    color: red;
`;

const SuccessContainer = styled.div`
    color: green;
`;
