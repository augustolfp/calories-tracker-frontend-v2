import { useMutation, useQueryClient } from 'react-query';
import { useAuth } from './useAuth';
import { api } from '../lib/axios';
import { FavoriteIngBody } from '../types';
import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';

export function useFavoriteIngredientCreator() {
    const { authHeader } = useAuth();
    const queryClient = useQueryClient();
    const toast = useToast();

    return useMutation({
        mutationFn: (favIngBody: FavoriteIngBody) => {
            return api.post('add-favorite-ingredient', favIngBody, authHeader);
        },
        onSuccess: () => {
            toast({
                title: 'Ai papai',
                description: 'Ingrediente favoritado com sucesso!',
                status: 'success',
                duration: 4000,
                isClosable: true,
                position: 'bottom-right',
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
                position: 'bottom-right',
            });
        },
    });
}
