import {
    Input,
    Button,
    FormControl,
    FormLabel,
    CircularProgress,
    Box,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useIngredientCreator } from '../../hooks/useIngredientCreator';

type Props = {
    mealId: number;
};

export default function CreateCustomIngredient(props: Props) {
    const [name, setName] = useState('');
    const [weight, setWeight] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [fats, setFats] = useState(0);
    const [proteins, setProteins] = useState(0);
    const [kcals, setKcals] = useState(0);

    const {
        mutate: addIngredient,
        isLoading,
        isError,
        error,
    } = useIngredientCreator();

    async function handleIngredientCreation(e: any) {
        e.preventDefault();
        const body = {
            name,
            mealId: props.mealId,
            weight: weight,
            carbs: carbs,
            fats: fats,
            proteins: proteins,
            kcals,
        };
        addIngredient(body);
    }

    return (
        <Box layerStyle="card">
            <Box as="h3" textStyle="h3" fontWeight="600">
                Crie um ingrediente
            </Box>
            <form onSubmit={handleIngredientCreation}>
                <FormControl isRequired>
                    <FormLabel>Ingrediente</FormLabel>
                    <Input
                        type="text"
                        name="ingName"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        placeholder="Nome do ingrediente"
                        disabled={isLoading}
                        required
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Quantidade, em gramas</FormLabel>
                    <Input
                        type="number"
                        name="weight"
                        value={weight}
                        onChange={(e) => {
                            setWeight(Number(e.target.value));
                        }}
                        placeholder="Peso (g)"
                        disabled={isLoading}
                        required
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Carboidratos, em gramas</FormLabel>
                    <Input
                        type="number"
                        name="carbs"
                        value={carbs}
                        onChange={(e) => {
                            setCarbs(Number(e.target.value));
                        }}
                        placeholder="Carboidratos (g)"
                        disabled={isLoading}
                        required
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Gorduras, em gramas</FormLabel>
                    <Input
                        type="number"
                        name="fats"
                        value={fats}
                        onChange={(e) => {
                            setFats(Number(e.target.value));
                        }}
                        placeholder="Gorduras (g)"
                        disabled={isLoading}
                        required
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Proteinas, em gramas</FormLabel>
                    <Input
                        type="number"
                        name="proteins"
                        value={proteins}
                        onChange={(e) => {
                            setProteins(Number(e.target.value));
                        }}
                        placeholder="Proteinas (g)"
                        disabled={isLoading}
                        required
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Total de Calorias</FormLabel>
                    <Input
                        type="number"
                        name="kcals"
                        value={kcals}
                        onChange={(e) => {
                            setKcals(Number(e.target.value));
                        }}
                        placeholder="kCals"
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
                        <CircularProgress
                            isIndeterminate
                            size={8}
                            color="purple"
                        />
                    ) : (
                        'Adicionar'
                    )}
                </Button>
            </form>
        </Box>
    );
}
