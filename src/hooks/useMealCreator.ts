import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useAuth } from './useAuth';
import { api } from '../lib/axios';

type MealBody = {
    name: string;
    description: string;
    countedDayId: number;
};

export function useMealCreator() {
    const { token } = useAuth();
    const queryClient = useQueryClient();

    const addMeal = async (data: any) => {
        return await api.post('/add-meal', data, token);
    };

    return useMutation({
        mutationFn: (mealBody: MealBody) => {
            return api.post('/add-meal', mealBody, token);
        },
        onSettled: () => {
            queryClient.invalidateQueries('userData');
        },
    });
}
