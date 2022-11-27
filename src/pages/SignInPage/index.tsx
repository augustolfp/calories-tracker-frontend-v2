import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import SignInForm from './SignInForm';
import CredentialsPageLayout from '../../components/CredentialsPageLayout';

export default function SignInPage() {
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
            ></SignInForm>
        </CredentialsPageLayout>
    );
}
