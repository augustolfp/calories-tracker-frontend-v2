import CredentialsPageLayout from '../../components/CredentialsPageLayout';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import SignUpForm from './SignUpForm';

export default function SignUpPage() {
    const { newUser, loading } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    async function handleNewUser(e: any) {
        e.preventDefault();
        try {
            await newUser(name, email, password);
            setErrMsg('');
        } catch (err) {
            setErrMsg('Ocorreu um erro!');
        }
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
                setErrMsg={setErrMsg}
            ></SignUpForm>
        </CredentialsPageLayout>
    );
}
