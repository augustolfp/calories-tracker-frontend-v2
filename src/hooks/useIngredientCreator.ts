import { useMutation, useQueryClient } from 'react-query';
import { useAuth } from './useAuth';
import { api } from '../lib/axios';
import { IngBody } from '../types';

export function useIngredientCreator() {
    const { token } = useAuth();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (ingBody: IngBody) => {
            return api.post('/add-ingredients', ingBody, token);
        },
        onSettled: () => {
            queryClient.invalidateQueries('userData');
        },
    });
}
