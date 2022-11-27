import { useMutation, useQueryClient } from 'react-query';
import { useAuth } from './useAuth';
import { api } from '../lib/axios';
import { DayBody } from '../types';
import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';

type DeleteRequest = {
    type: 'day' | 'meal' | 'ingredient';
    id: number;
};

export function useDelete() {
    const { authHeader } = useAuth();
    const queryClient = useQueryClient();
    const toast = useToast();

    return useMutation({
        mutationFn: (body: DeleteRequest) => {
            if (body.type === 'day') {
                return api.delete(`/delete-counted-day/${body.id}`, authHeader);
            }
            if (body.type === 'meal') {
                return api.delete(`/delete-meal/${body.id}`, authHeader);
            }
            return api.delete(`/delete-ingredient/${body.id}`, authHeader);
        },
        onSuccess: () => {
            toast({
                title: 'Birl!',
                description: 'Apagado com sucesso',
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
