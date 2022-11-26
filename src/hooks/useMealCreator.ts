import { useMutation, useQueryClient } from 'react-query';
import { useAuth } from './useAuth';
import { api } from '../lib/axios';
import { MealBody } from '../types';
import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';

export function useMealCreator() {
    const { authHeader } = useAuth();
    const queryClient = useQueryClient();
    const toast = useToast();

    const addMeal = async (data: any) => {
        return await api.post('/add-meal', data, authHeader);
    };

    return useMutation({
        mutationFn: (mealBody: MealBody) => {
            return api.post('/add-meal', mealBody, authHeader);
        },
        onSuccess: () => {
            toast({
                title: 'Que delícia, cara',
                description: 'Refeição adicionada com sucesso!',
                status: 'success',
                duration: 4000,
                isClosable: true,
            });
            return queryClient.invalidateQueries('userData');
        },
        onError: (err: AxiosError) => {
            toast({
                title: 'Ocorreu um erro :(',
                description: `${
                    err.response?.data
                        ? err.response.data
                        : 'Erro desconhecido. Atualize a página!'
                }`,
                status: 'error',
                duration: 4000,
                isClosable: true,
            });
        },
    });
}
