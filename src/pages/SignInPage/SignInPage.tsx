import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Flex, Image, Box, Heading } from '@chakra-ui/react';
import bananaIcon from '../../../public/icon.svg';
import SignInForm from './SignInForm';

export default function SignInPage() {
    const { login, loading, isLoggedIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    async function handleLogin(e: any) {
        e.preventDefault();
        try {
            await login(email, password);
            setErrMsg('');
        } catch (err) {
            setErrMsg('Login falhou!');
        }
    }

    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Image boxSize="sm" src={bananaIcon} alt="banana logo" />
            <Flex direction="column" p={12} rounded={6}>
                <SignInForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    loading={loading}
                    handleLogin={handleLogin}
                    setErrMsg={setErrMsg}
                />
                {errMsg && (
                    <Flex
                        bg="tomato"
                        p={2}
                        borderRadius={8}
                        w={60}
                        justify="center"
                    >
                        <Heading as="h3" size="md" color="white">
                            {errMsg}
                        </Heading>
                    </Flex>
                )}
                {isLoggedIn && (
                    <Flex
                        bg="green.400"
                        p={2}
                        borderRadius={8}
                        w={60}
                        justify="center"
                    >
                        <Heading as="h3" size="md" color="white">
                            Você está logado!
                        </Heading>
                    </Flex>
                )}
            </Flex>
        </Flex>
    );
}
