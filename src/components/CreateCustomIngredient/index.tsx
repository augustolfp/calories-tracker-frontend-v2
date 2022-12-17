import {
    Input,
    Button,
    FormControl,
    FormLabel,
    CircularProgress,
    Box,
    Grid,
    GridItem,
    Flex,
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
        <Box layerStyle="ingCreatorCard">
            <Box as="h3" textStyle="h3" fontWeight="600">
                Crie um ingrediente
            </Box>
            <Grid
                templateAreas={`"name name"
                                    "quantity carbs" 
                                    "proteins fats"
                                    "calories createBtn"`}
                gridTemplateColumns="1fr 1fr"
                gridGap="10px"
            >
                <GridItem
                    area={'name'}
                    layerStyle="colorfulCard"
                    bg="pageGreen.500"
                    p={4}
                >
                    <FormControl isRequired>
                        <FormLabel fontWeight="700">Nome</FormLabel>
                        <Input
                            type="text"
                            name="ingName"
                            variant="unstyled"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            placeholder="Digite aqui..."
                            disabled={isLoading}
                            required
                        />
                    </FormControl>
                </GridItem>
                <GridItem area={'createBtn'}>
                    <Button
                        h="60px"
                        variant="solid"
                        colorScheme="purple"
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
                </GridItem>
                <GridItem area={'quantity'}>
                    <FormControl isRequired>
                        <FormLabel
                            fontSize={['10px', '12px', '16px']}
                            color="white"
                            fontWeight="700"
                            position="absolute"
                            top="4px"
                            left="50%"
                            sx={{
                                'z-index': '1',
                                transform: 'translate(-50%,0)',
                            }}
                        >
                            Quantidade
                        </FormLabel>
                        <NumberInput
                            variant="ingredientVariant"
                            bg="pageGreen.500"
                            value={formatNumToGrams(weight)}
                            step={5}
                            onChange={(value) => {
                                setWeight(parseGramsToNumber(value));
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
                    </FormControl>
                </GridItem>
                <GridItem area={'carbs'}>
                    <FormControl isRequired>
                        <FormLabel
                            fontSize={['10px', '12px', '16px']}
                            color="white"
                            fontWeight="700"
                            position="absolute"
                            top="4px"
                            left="50%"
                            sx={{
                                'z-index': '1',
                                transform: 'translate(-50%,0)',
                            }}
                        >
                            Carboidratos
                        </FormLabel>
                        <NumberInput
                            variant="ingredientVariant"
                            bg="carbsColor.500"
                            value={formatNumToGrams(carbs)}
                            step={5}
                            onChange={(value) => {
                                setCarbs(parseGramsToNumber(value));
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
                    </FormControl>
                </GridItem>
                <GridItem area={'fats'}>
                    <FormControl isRequired>
                        <FormLabel
                            fontSize={['10px', '12px', '16px']}
                            color="white"
                            fontWeight="700"
                            position="absolute"
                            top="4px"
                            left="50%"
                            sx={{
                                'z-index': '1',
                                transform: 'translate(-50%,0)',
                            }}
                        >
                            Gorduras
                        </FormLabel>
                        <NumberInput
                            variant="ingredientVariant"
                            bg="fatsColor.500"
                            value={formatNumToGrams(fats)}
                            step={5}
                            onChange={(value) => {
                                setFats(parseGramsToNumber(value));
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
                    </FormControl>
                </GridItem>
                <GridItem area={'proteins'}>
                    <FormControl isRequired>
                        <FormLabel
                            fontSize={['10px', '12px', '16px']}
                            color="white"
                            fontWeight="700"
                            position="absolute"
                            top="4px"
                            left="50%"
                            sx={{
                                'z-index': '1',
                                transform: 'translate(-50%,0)',
                            }}
                        >
                            Proteinas
                        </FormLabel>
                        <NumberInput
                            variant="ingredientVariant"
                            bg="proteinsColor.500"
                            value={formatNumToGrams(proteins)}
                            step={5}
                            onChange={(value) => {
                                setProteins(parseGramsToNumber(value));
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
                    </FormControl>
                </GridItem>
                <GridItem area={'calories'}>
                    <Flex
                        layerStyle="colorfulCard"
                        bg="kcalsColor.500"
                        display="flex"
                        alignItems="center"
                        h="60px"
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
                </GridItem>
            </Grid>
        </Box>
    );
}
