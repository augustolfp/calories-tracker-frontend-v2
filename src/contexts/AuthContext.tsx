import { createContext, useState } from 'react';
import { signIn } from '../services/auth';

type AuthContext = {
    token: {};
    login: any;
    isLoggedIn: boolean;
    errMsg: string;
    loading: boolean;
};

export const AuthContext = createContext({} as AuthContext);

export function AuthProvider(props: any) {
    const [token, setToken] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [loading, setLoading] = useState(false);

    async function login(email: string, password: string) {
        setLoading(true);
        try {
            const response = await signIn({ email, password });
            setToken({
                headers: {
                    Authorization: `Bearer ${response.data.token}`,
                },
            });
            setIsLoggedIn(true);
            setErrMsg('');
            setLoading(false);
        } catch (err) {
            setErrMsg('Login falhou!');
            setLoading(false);
        }
    }

    return (
        <AuthContext.Provider
            value={{ token, login, isLoggedIn, errMsg, loading }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
