import { useState } from 'react';
import { api } from '../lib/axios';
import { AuthContext } from './AuthContext';

type AuthContext = {
    token: {};
    userId: number;
    userName: string;
    login: Function;
    newUser: Function;
    isLoggedIn: boolean;
    loading: boolean;
};

export function AuthProvider({ children }: { children: JSX.Element }) {
    const [token, setToken] = useState({});
    const [userId, setUserId] = useState(-1);
    const [userName, setUserName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    async function signIn(email: string, password: string) {
        setLoading(true);
        try {
            const response = await api.post('/sign-in', { email, password });
            setToken({
                headers: {
                    Authorization: `Bearer ${response.data.token}`,
                },
            });
            setUserId(Number(response.data.id));
            setUserName(response.data.name);
            setIsLoggedIn(true);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            throw Error('Login failed');
        }
    }

    async function signUp(name: string, email: string, password: string) {
        setLoading(true);
        try {
            const response = await api.post('/sign-up', {
                name,
                email,
                password,
            });
            setLoading(false);
        } catch (err) {
            setLoading(false);
            throw Error('SignUp failed');
        }
    }

    async function signOut() {
        return;
    }

    return (
        <AuthContext.Provider
            value={{
                token,
                userName,
                userId,
                signIn,
                signUp,
                signOut,
                isLoggedIn,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
