import { useState, useEffect } from 'react';
import { api } from '../lib/axios';
import { AuthContext } from './AuthContext';

type AuthContext = {
    authHeader: {};
    userId: number;
    userName: string;
    login: Function;
    newUser: Function;
    isLoggedIn: boolean;
    loading: boolean;
};

export function AuthProvider({ children }: { children: JSX.Element }) {
    const [authHeader, setAuthHeader] = useState({});
    const [userId, setUserId] = useState(-1);
    const [userName, setUserName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if (storageData) {
                try {
                    const response = await api.get('/validate', {
                        headers: {
                            Authorization: `Bearer ${storageData}`,
                        },
                    });
                    setAuthHeader({
                        headers: {
                            Authorization: `Bearer ${storageData}`,
                        },
                    });
                    setUserId(response.data.id);
                    setUserName(response.data.name);
                    setIsLoggedIn(true);
                } catch (err) {
                    setIsLoggedIn(false);
                }
            } else {
                setIsLoggedIn(false);
            }
        };
        validateToken();
    }, [api]);

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    };

    async function signIn(email: string, password: string) {
        setLoading(true);
        try {
            const response = await api.post('/sign-in', { email, password });
            setAuthHeader({
                headers: {
                    Authorization: `Bearer ${response.data.token}`,
                },
            });
            setToken(response.data.token);
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
        setToken('');
        setAuthHeader({});
        setUserName('');
        setUserId(-1);
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider
            value={{
                authHeader,
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
