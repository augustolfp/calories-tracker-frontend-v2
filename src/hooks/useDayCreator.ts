import { useMutation, useQueryClient } from 'react-query';
import { useAuth } from './useAuth';
import { api } from '../lib/axios';
import { DayBody } from '../types';

export function useDayCreator() {
    const { token } = useAuth();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (dayBody: DayBody) => {
            return api.post('/add-counted-day', dayBody, token);
        },
        onSettled: () => {
            queryClient.invalidateQueries('userData');
        },
    });
}
