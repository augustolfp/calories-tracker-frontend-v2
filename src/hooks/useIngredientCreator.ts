import { useMutation, useQueryClient } from 'react-query';
import { useAuth } from './useAuth';
import { api } from '../lib/axios';
import { IngBody } from '../types';
import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';

export function useIngredientCreator() {
    const { authHeader } = useAuth();
    const queryClient = useQueryClient();
    const toast = useToast();

    return useMutation({
        mutationFn: (ingBody: IngBody) => {
            return api.post('/add-ingredients', ingBody, authHeader);
        },
        onSuccess: () => {
            toast({
                title: 'Ai papai',
                description: 'Ingrediente adicionado com sucesso!',
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
