import CredentialsPageLayout from '../../components/CredentialsPageLayout';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import SignUpForm from './SignUpForm';

export default function SignUpPage() {
    const { signUp, loading } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleNewUser(e: any) {
        e.preventDefault();
        signUp(name, email, password);
    }

    return (
        <CredentialsPageLayout>
            <SignUpForm
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                loading={loading}
                handleNewUser={handleNewUser}
            />
        </CredentialsPageLayout>
    );
}
