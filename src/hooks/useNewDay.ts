import { useMutation, useQueryClient } from 'react-query';
import { useAuth } from './useAuth';
import { api } from '../lib/axios';

type DayBody = {
    day: string;
    notes: string;
    caloriesTarget: number;
    proteinsTarget: number;
};

export function useNewDay() {
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
