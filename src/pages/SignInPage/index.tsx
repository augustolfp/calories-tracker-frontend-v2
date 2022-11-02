import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Flex, Image, Box, Heading } from '@chakra-ui/react';
import bananaIcon from '../../../public/icon.svg';
import SignInForm from './SignInForm';
import SignInStatus from './SignInStatus';
import CredentialsPageLayout from '../../components/CredentialsPageLayout';

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
        <CredentialsPageLayout>
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
        </CredentialsPageLayout>
    );
}
