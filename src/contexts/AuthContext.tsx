import { createContext, useState } from 'react';
import { api } from '../lib/axios';

type AuthContext = {
    token: {};
    login: Function;
    isLoggedIn: boolean;
    loading: boolean;
};

export const AuthContext = createContext({} as AuthContext);

export function AuthProvider(props: any) {
    const [token, setToken] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    async function login(email: string, password: string) {
        setLoading(true);
        try {
            const response = await api.post('/sign-in', { email, password });
            setToken({
                headers: {
                    Authorization: `Bearer ${response.data.token}`,
                },
            });
            setIsLoggedIn(true);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            throw Error('Login failed');
        }
    }

    return (
        <AuthContext.Provider value={{ token, login, isLoggedIn, loading }}>
            {props.children}
        </AuthContext.Provider>
    );
}
