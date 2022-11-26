import { useMutation, useQueryClient } from 'react-query';
import { useAuth } from './useAuth';
import { api } from '../lib/axios';
import { DayBody } from '../types';
import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';

export function useDayCreator() {
    const { authHeader } = useAuth();
    const queryClient = useQueryClient();
    const toast = useToast();

    return useMutation({
        mutationFn: (dayBody: DayBody) => {
            return api.post('/add-counted-day', dayBody, authHeader);
        },
        onSuccess: () => {
            toast({
                title: 'Birl!',
                description: 'Dia adicionado com sucesso!',
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
