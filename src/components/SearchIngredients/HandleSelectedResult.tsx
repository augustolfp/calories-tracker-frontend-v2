import { Box, VStack, Button } from '@chakra-ui/react';
import { SearchResult } from '../../types';
import { useState } from 'react';
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';
import { useIngredientCreator } from '../../hooks/useIngredientCreator';

type Props = {
    selectedResult: SearchResult;
    mealId: number;
};

export default function HandleSelectedResult(props: Props) {
    const [amount, setAmount] = useState(props.selectedResult.baseQty);

    function calcProportions(nutrient: number) {
        const proportion = (nutrient * amount) / props.selectedResult.baseQty;
        return Math.round((proportion * 10) / 10);
    }
    let proteins = calcProportions(props.selectedResult.proteins);
    let carbs = calcProportions(props.selectedResult.carbs);
    let fats = calcProportions(props.selectedResult.fats);
    let kcals = calcProportions(props.selectedResult.kcals);

    const {
        mutate: addIngredient,
        isLoading,
        isError,
        error,
    } = useIngredientCreator();

    async function handleIngredientCreation(e: any) {
        e.preventDefault();
        const body = {
            name: props.selectedResult.description,
            mealId: props.mealId,
            weight: amount,
            carbs: carbs,
            fats: fats,
            proteins: proteins,
            kcals,
        };
        addIngredient(body);
    }

    return (
        <VStack>
            <NumberInput
                value={amount}
                precision={2}
                step={50}
                onChange={(value) => {
                    setAmount(Number(value));
                }}
            >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <Box>{props.selectedResult.description}</Box>
            <Box>Prot: {proteins}g</Box>
            <Box>Carb: {carbs}g</Box>
            <Box>Gord: {fats}g</Box>
            <Box>kCal: {kcals}g</Box>
            <Button onClick={handleIngredientCreation}>Adicionar</Button>
        </VStack>
    );
}
