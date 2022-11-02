import { Box, VStack } from '@chakra-ui/react';
import { SearchResult } from '.';

export default function ResultCard(props: SearchResult) {
    return (
        <VStack>
            <Box>{props.description}</Box>
            <Box>
                Porção de {props.baseQty.toFixed(0)}
                {props.baseUnit} • Prot: {props.proteins.toFixed(1)}
                {props.proteinUnit} • Carb: {props.carbs.toFixed(1)}
                {props.carbUnit} • Gord: {props.fats.toFixed(1)}
                {props.fatUnit} • kCal: {props.kcals.toFixed(0)}
            </Box>
        </VStack>
    );
}
