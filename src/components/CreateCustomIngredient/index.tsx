import {
    Input,
    Button,
    CircularProgress,
    Box,
    Flex,
    SimpleGrid,
} from '@chakra-ui/react';
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
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
    let kcals = 4 * proteins + 9 * fats + 4 * carbs;

    const formatNumToGrams = (val: number) => `${val} g`;
    const parseGramsToNumber = (val: string) => Number(val.replace(/ g$/, ''));
    const { mutate: addIngredient, isLoading } = useIngredientCreator();

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
        <Box layerStyle="ingCreatorCard">
            <Box as="h2">Crie um ingrediente</Box>
            <SimpleGrid columns={1} spacing="10px">
                <Box layerStyle="ingCreatorInputContainer" bg="pageGreen.500">
                    <Box fontWeight="700">Nome</Box>
                    <Input
                        type="text"
                        name="ingName"
                        variant="ingredientVariant"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        placeholder="Digite aqui..."
                        disabled={isLoading}
                        required
                    />
                </Box>
                <Box layerStyle="ingCreatorInputContainer" bg="pageGreen.500">
                    <Box fontWeight="700">Quantidade [g]</Box>
                    <NumberInput
                        variant="ingredientVariant"
                        value={weight}
                        step={5}
                        onChange={(value) => {
                            setWeight(Number(value));
                        }}
                        isDisabled={isLoading}
                        isRequired
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Box>
                <Box layerStyle="ingCreatorInputContainer" bg="carbsColor.500">
                    <Box fontWeight="700">Carboidratos [g]</Box>
                    <NumberInput
                        variant="ingredientVariant"
                        value={carbs}
                        step={5}
                        onChange={(value) => {
                            setCarbs(Number(value));
                        }}
                        isDisabled={isLoading}
                        isRequired
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Box>
                <Box layerStyle="ingCreatorInputContainer" bg="fatsColor.500">
                    <Box fontWeight="700">Gorduras [g]</Box>
                    <NumberInput
                        variant="ingredientVariant"
                        value={fats}
                        step={5}
                        onChange={(value) => {
                            setFats(Number(value));
                        }}
                        isDisabled={isLoading}
                        isRequired
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Box>
                <Box
                    layerStyle="ingCreatorInputContainer"
                    bg="proteinsColor.500"
                >
                    <Box fontWeight="700">Proteinas [g]</Box>
                    <NumberInput
                        variant="ingredientVariant"
                        value={proteins}
                        step={5}
                        onChange={(value) => {
                            setProteins(Number(value));
                        }}
                        isDisabled={isLoading}
                        isRequired
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Box>
                <SimpleGrid columns={2} spacing="10px">
                    <Flex
                        layerStyle="colorfulCard"
                        bg="kcalsColor.500"
                        alignItems="center"
                        fontSize={['10px', '12px', '16px']}
                    >
                        <Flex
                            direction="column"
                            align="center"
                            justify="center"
                        >
                            <Box>Calorias</Box>
                            <Box fontWeight="400">(calculado)</Box>
                        </Flex>
                        <Box>{kcals}kCal</Box>
                    </Flex>
                    <Button
                        h="full"
                        variant="solid"
                        width="full"
                        mb={6}
                        type="submit"
                        disabled={isLoading}
                        onClick={handleIngredientCreation}
                    >
                        {isLoading ? (
                            <CircularProgress
                                isIndeterminate
                                size={8}
                                color="purple"
                            />
                        ) : (
                            'Criar'
                        )}
                    </Button>
                </SimpleGrid>
            </SimpleGrid>
        </Box>
    );
}
