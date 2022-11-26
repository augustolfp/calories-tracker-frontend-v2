import { createContext } from 'react';

type AuthContextType = {
    token: {};
    userId: number;
    userName: string;
    signIn: Function;
    signUp: Function;
    signOut: Function;
    isLoggedIn: boolean;
    loading: boolean;
};

export const AuthContext = createContext({} as AuthContextType);
