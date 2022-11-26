import { useQuery } from 'react-query';
import { useAuth } from './useAuth';
import { api } from '../lib/axios';
import { Day } from '../types';

export function useData() {
    const { isLoggedIn, authHeader } = useAuth();
    const { isLoading, isFetching, isError, data, status } = useQuery<Day[]>(
        'userData',
        async () => {
            const { data } = await api.get('/get-days-data', authHeader);
            return data;
        },
        {
            staleTime: 1000 * 60, // 1 minute
            enabled: isLoggedIn,
        }
    );
    return { isLoading, isFetching, isError, data, status };
}
