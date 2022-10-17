import { createContext, useState } from 'react';
import { fetchUserData } from '../services/fetch';
import { useQuery } from 'react-query';
import { useAuth } from '../hooks/useAuth';

type MealIngredient = {
    id: number;
    name: string;
    mealId: number;
    weightInGrams: number;
    carbsInGrams: number;
    fatsInGrams: number;
    proteinsInGrams: number;
    kcals: number;
};

type DayMeal = {
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

type Day = {
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

type DataContext = {
    isFetching: boolean;
    countedDays: Day[] | undefined;
};

export const DataContext = createContext({} as DataContext);

export function DataProvider(props: any) {
    const { token } = useAuth();
    const { data, isFetching } = useQuery<Day[]>(
        'userData',
        async () => {
            const response = await fetchUserData(token);

            return response.data;
        },
        {
            staleTime: 1000 * 60, // 1 minute
        }
    );
    return (
        <DataContext.Provider value={{ countedDays: data, isFetching }}>
            {props.children}
        </DataContext.Provider>
    );
}
