import { useState, useEffect } from 'react';
import { api } from '../lib/axios';
import { AuthContext } from './AuthContext';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const toast = useToast();
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
            toast({
                title: 'Boa!',
                description: 'Login bem-sucedido!',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'bottom-right',
            });
            navigate('/dashboard');
        } catch (err) {
            setLoading(false);
            toast({
                title: 'Ocorreu um erro :(',
                description: 'Login falhou.',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'bottom-right',
            });
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
            toast({
                title: 'Boa!',
                description: 'Usuário cadastrado com sucesso!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            navigate('/');
        } catch (err) {
            setLoading(false);
            toast({
                title: 'Ocorreu um erro :(',
                description: 'Algo de errado não está certo.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    }

    async function signOut() {
        setToken('');
        setAuthHeader({});
        setUserName('');
        setUserId(-1);
        setIsLoggedIn(false);
        window.location.reload();
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
