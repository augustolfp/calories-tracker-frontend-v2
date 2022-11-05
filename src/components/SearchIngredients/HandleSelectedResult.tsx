import { Box, VStack, Button } from '@chakra-ui/react';
import { SearchResult } from '../SearchIngredients';
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
    let proteins =
        (props.selectedResult.proteins * amount) / props.selectedResult.baseQty;
    let carbs =
        (props.selectedResult.carbs * amount) / props.selectedResult.baseQty;
    let fats =
        (props.selectedResult.fats * amount) / props.selectedResult.baseQty;
    let kcals =
        (props.selectedResult.kcals * amount) / props.selectedResult.baseQty;

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
            weightInGrams: amount,
            carbsInGrams: carbs,
            fatsInGrams: fats,
            proteinsInGrams: proteins,
            kcals,
        };
        addIngredient(body);
    }

    return (
        <VStack>
            <NumberInput
                value={amount}
                precision={2}
                step={0.2}
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
            <Box>Prot: {proteins.toFixed(1)}g</Box>
            <Box>Carb: {carbs.toFixed(1)}g</Box>
            <Box>Gord: {fats.toFixed(1)}g</Box>
            <Box>kCal: {kcals.toFixed(1)}g</Box>
            <Button onClick={handleIngredientCreation}>Adicionar</Button>
        </VStack>
    );
}
