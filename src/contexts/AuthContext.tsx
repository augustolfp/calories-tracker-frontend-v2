import { createContext, useState } from 'react';
import { api } from '../lib/axios';

type AuthContext = {
    token: {};
    userId: number;
    userName: string;
    login: Function;
    newUser: Function;
    isLoggedIn: boolean;
    loading: boolean;
};

export const AuthContext = createContext({} as AuthContext);
