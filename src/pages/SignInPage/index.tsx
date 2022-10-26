import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Flex, Image, Box, Heading } from '@chakra-ui/react';
import bananaIcon from '../../../public/icon.svg';
import SignInForm from './SignInForm';
import SignInStatus from './SignInStatus';

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
        <Flex
            height="100vh"
            direction={['column', 'row']}
            alignItems="center"
            justifyContent="center"
        >
            <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Flex
                    direction={['row', 'column']}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Image
                        boxSize={[50, 200]}
                        src={bananaIcon}
                        alt="banana logo"
                    />
                    <Flex
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Box as="h1" textStyle="h1">
                            No-NonSense!
                        </Box>
                        <Box as="h2" textStyle="h2">
                            Calories Tracker
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
            <Flex direction="column" p={12} rounded={6}>
                <SignInForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    loading={loading}
                    handleLogin={handleLogin}
                    setErrMsg={setErrMsg}
                    isLoggedIn={isLoggedIn}
                >
                    <SignInStatus errMsg={errMsg} isLoggedIn={isLoggedIn} />
                </SignInForm>
            </Flex>
        </Flex>
    );
}
