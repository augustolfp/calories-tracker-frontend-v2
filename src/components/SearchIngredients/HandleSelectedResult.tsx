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
    selectedResult: SearchResult | null;
    mealId: number;
};

export default function HandleSelectedResult(props: Props) {
    const [amount, setAmount] = useState(
        props.selectedResult?.baseQty ? props.selectedResult.baseQty : 100
    );

    function calcProportions(nutrient?: number) {
        if (props.selectedResult && nutrient) {
            const proportion =
                (nutrient * amount) / props.selectedResult.baseQty;
            return Math.round((proportion * 10) / 10);
        }
        return 0;
    }

    let proteins = calcProportions(props.selectedResult?.proteins);
    let carbs = calcProportions(props.selectedResult?.carbs);
    let fats = calcProportions(props.selectedResult?.fats);
    let kcals = calcProportions(props.selectedResult?.kcals);

    const {
        mutate: addIngredient,
        isLoading,
        isError,
        error,
    } = useIngredientCreator();

    async function handleIngredientCreation(e: any) {
        e.preventDefault();

        if (props.selectedResult) {
            const body = {
                name: props.selectedResult.description!,
                mealId: props.mealId,
                weight: amount,
                carbs,
                fats,
                proteins,
                kcals,
            };
            addIngredient(body);
        }
    }

    return (
        <VStack>
            <NumberInput
                layerStyle="colorfulCard"
                bg={props.selectedResult ? 'pageGreen.500' : 'pageGreen.400'}
                value={amount}
                precision={2}
                step={50}
                onChange={(value) => {
                    setAmount(Number(value));
                }}
                isDisabled={props.selectedResult ? false : true}
            >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <Box
                layerStyle="colorfulCard"
                p="10px 0"
                w="full"
                bg={
                    props.selectedResult
                        ? 'proteinsColor.500'
                        : 'proteinsColor.400'
                }
            >
                Prot: {proteins}g
            </Box>
            <Box
                layerStyle="colorfulCard"
                p="10px 0"
                w="full"
                bg={props.selectedResult ? 'carbsColor.500' : 'carbsColor.400'}
            >
                Carb: {carbs}g
            </Box>
            <Box
                layerStyle="colorfulCard"
                p="10px 0"
                w="full"
                bg={props.selectedResult ? 'fatsColor.500' : 'fatsColor.400'}
            >
                Gord: {fats}g
            </Box>
            <Box
                layerStyle="colorfulCard"
                p="10px 0"
                w="full"
                bg={props.selectedResult ? 'kcalsColor.500' : 'kcalsColor.400'}
            >
                kCal: {kcals}g
            </Box>
            <Button
                w="full"
                disabled={props.selectedResult ? false : true}
                onClick={handleIngredientCreation}
                bg={props.selectedResult ? 'pageGreen.500' : 'pageGreen.400'}
            >
                Adicionar
            </Button>
        </VStack>
    );
}
