import { useQuery } from 'react-query';
import { api } from '../../lib/axios';
import { useAuth } from '../../hooks/useAuth';
import styled from 'styled-components';

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

export default function DashBoard() {
    const { token } = useAuth();
    const { data, isFetching } = useQuery<Day[]>(
        'userData',
        async () => {
            const response = await api.get('/get-days-data', token);

            return response.data;
        },
        {
            staleTime: 1000 * 60, // 1 minute
        }
    );
    return (
        <Container>
            {isFetching && <p>Carregando...</p>}
            {data?.map((day, index) => {
                return (
                    <div key={index}>
                        <h1>{day.notes}</h1>
                    </div>
                );
            })}
        </Container>
    );
}

const Container = styled.div``;
