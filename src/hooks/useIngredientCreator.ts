import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useAuth } from './useAuth';
import { api } from '../lib/axios';
import { MealIngredient } from './useData';

export function useIngredientCreator() {
    const { token } = useAuth();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (ingBody: MealIngredient) => {
            return api.post(
                '/add-ingredients',
                { ingredients: [ingBody] },
                token
            );
        },
        onSettled: () => {
            queryClient.invalidateQueries('userData');
        },
    });
}
