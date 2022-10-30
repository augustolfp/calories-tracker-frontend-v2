import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchUserData } from '../services/fetch';
import { useAuth } from './useAuth';
import { api } from '../lib/axios';

export type mealBody = {
    name: string;
    description: string;
    countedDayId: number;
};

export type MealIngredient = {
    id: number;
    name: string;
    mealId: number;
    weightInGrams: number;
    carbsInGrams: number;
    fatsInGrams: number;
    proteinsInGrams: number;
    kcals: number;
};

export type DayMeal = {
    mealId: number;
    countedDayId: number;
    mealName: string;
    mealDescription: string;
    mealCreationDate: string;
    carbs: number;
    fats: number;
    proteins: number;
    kcals: number;
    ingredientList: MealIngredient[];
};

export type Day = {
    id: number;
    day: string;
    notes: string;
    userId: number;
    caloriesTarget: number;
    proteinsTarget: number;
    carbs: number;
    fats: number;
    proteins: number;
    kcals: number;
    dayMeals: DayMeal[];
};

export function useData() {
    const { isLoggedIn, token } = useAuth();
    const { data, isFetching } = useQuery<Day[]>(
        'userData',
        async () => {
            const response = await fetchUserData(token);

            return response.data;
        },
        {
            staleTime: 1000 * 60, // 1 minute
            enabled: isLoggedIn,
        }
    );
    return { data, isFetching };
}

export function useMealCreator() {
    const { token } = useAuth();
    const queryClient = useQueryClient();

    const addMeal = (data: any) => {
        return api.post('/add-meal', data, token);
    };

    return useMutation(addMeal, {
        onSettled: () => {
            queryClient.invalidateQueries('userData');
        },
    });
}
