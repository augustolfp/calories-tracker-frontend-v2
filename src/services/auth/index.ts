import { api } from '../../lib/axios';

type SignInBody = {
    email: string;
    password: string;
};

export async function signIn(signInBody: SignInBody) {
    return await api.post('/sign-in', signInBody);
}
