import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import SignInForm from './SignInForm';
import CredentialsPageLayout from '../../components/CredentialsPageLayout';
import qs from 'query-string';
import { api } from '../../lib/axios';

export default function SignInPage() {
    const { code } = qs.parseUrl(window.location.href).query;
    useEffect(() => {
        if (code) {
            const response = api.post('/oauth/github', {
                code: code,
            });

            response.then((res) => {
                console.log(res);
            });
        }
    }, []);

    const { signIn, loading, isLoggedIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e: any) {
        e.preventDefault();
        signIn(email, password);
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
                isLoggedIn={isLoggedIn}
            />
        </CredentialsPageLayout>
    );
}
