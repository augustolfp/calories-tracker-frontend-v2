import {
    Input,
    Button,
    FormControl,
    FormLabel,
    CircularProgress,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useMealCreator } from '../../hooks/useMealCreator';

type Props = {
    countedDayId: number;
};

export default function MealForm(props: Props) {
    const { mutate: addMeal, isLoading, isError, error } = useMealCreator();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    async function handleMealCreation(e: any) {
        e.preventDefault();
        const body = {
            name,
            description,
            countedDayId: Number(props.countedDayId),
        };
        addMeal(body);
    }

    return (
        <form onSubmit={handleMealCreation}>
            <FormControl isRequired>
                <FormLabel>Título da refeição</FormLabel>
                <Input
                    variant="filled"
                    mb={3}
                    type="text"
                    name="mealName"
                    focusBorderColor="purple.400"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    placeholder="Título da refeição"
                    disabled={isLoading}
                    required
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Descrição da refeição</FormLabel>
                <Input
                    variant="filled"
                    mb={3}
                    type="text"
                    name="mealDescription"
                    focusBorderColor="purple.400"
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    placeholder="Descrição da refeição"
                    disabled={isLoading}
                    required
                />
            </FormControl>
            <Button
                variant="solid"
                colorScheme="purple"
                width="full"
                mb={6}
                type="submit"
                disabled={isLoading}
            >
                {isLoading ? (
                    <CircularProgress isIndeterminate size={8} color="purple" />
                ) : (
                    'Adicionar'
                )}
            </Button>
        </form>
    );
}
