import { api } from '../../lib/axios';

export type mealBody = {
    name: string;
    description: string;
    countedDayId: number;
};

export async function addMeal(body: mealBody, token: {}) {
    return await api.post('/add-meal', body, token);
}
