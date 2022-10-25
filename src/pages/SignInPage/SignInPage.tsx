import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Flex, Image, Box } from '@chakra-ui/react';
import bananaIcon from '../../../public/icon.svg';
import SignInForm from './SignInForm';

export default function SignInPage() {
    const { login, loading, isLoggedIn, errMsg } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                    <SignInForm
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        loading={loading}
                        handleLogin={handleLogin}
                    />
                )}
                {errMsg && <Box>Falha no login!</Box>}
                {isLoggedIn && <Box>Você está logado!</Box>}
            </Flex>
        </Flex>
    );
}
