import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useAuth } from './useAuth';
import { api } from '../lib/axios';
import { MealIngredient } from './useData';

type IngBody = Omit<MealIngredient, 'id'>;

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
