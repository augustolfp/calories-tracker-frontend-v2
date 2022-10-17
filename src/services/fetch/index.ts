import { api } from '../../lib/axios';

export async function fetchUserData(token: {}) {
    return await api.get('/get-days-data', token);
}
