import {
    Input,
    Button,
    FormControl,
    FormLabel,
    CircularProgress,
    VStack,
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

    function clearInputs() {
        setName('');
        setDescription('');
    }

    async function handleMealCreation(e: any) {
        e.preventDefault();
        const body = {
            name,
            description,
            countedDayId: Number(props.countedDayId),
        };
        addMeal(body, { onSuccess: () => clearInputs() });
    }

    return (
        <form onSubmit={handleMealCreation}>
            <VStack spacing={8}>
                <FormControl isRequired>
                    <FormLabel as="h3" textStyle="h3">
                        Título
                    </FormLabel>
                    <Input
                        type="text"
                        name="mealName"
                        focusBorderColor="#3db9a2"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        placeholder="Digite aqui..."
                        disabled={isLoading}
                        required
                    />
                </FormControl>
                <FormControl>
                    <FormLabel as="h3" textStyle="h3">
                        Descrição
                    </FormLabel>
                    <Input
                        type="text"
                        name="mealDescription"
                        focusBorderColor="#3db9a2"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        placeholder="Digite aqui..."
                        disabled={isLoading}
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
                        <CircularProgress
                            isIndeterminate
                            size={8}
                            color="purple"
                        />
                    ) : (
                        'Adicionar'
                    )}
                </Button>
            </VStack>
        </form>
    );
}
