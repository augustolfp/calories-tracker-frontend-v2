import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useAuth } from './useAuth';
import { api } from '../lib/axios';

export function useMealCreator() {
    const { token } = useAuth();
    const queryClient = useQueryClient();

    const addMeal = async (data: any) => {
        return await api.post('/add-meal', data, token);
    };

    return useMutation(addMeal, {
        onSettled: () => {
            queryClient.invalidateQueries('userData');
        },
    });
}
