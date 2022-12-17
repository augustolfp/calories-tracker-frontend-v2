import { SimpleGrid, Box } from '@chakra-ui/react';
import { DayMeal } from '../../types';

export default function MealResumeGrid(props: DayMeal) {
    return (
        <SimpleGrid
            columns={2}
            spacing={['8px', '16px']}
            layerStyle="mealResumeGrid"
        >
            <Box layerStyle="colorfulCard" bg="kcalsColor.500">
                <Box>Calorias:</Box>
                <Box>{props.kcals} kCal</Box>
            </Box>
            <Box layerStyle="colorfulCard" bg="proteinsColor.500">
                <Box>Proteinas:</Box>
                <Box> {props.proteins} g</Box>
            </Box>
            <Box layerStyle="colorfulCard" bg="fatsColor.500">
                <Box>Gorduras:</Box>
                <Box>{props.fats} g</Box>
            </Box>
            <Box layerStyle="colorfulCard" bg="carbsColor.500">
                <Box>Carboidratos:</Box>
                <Box>{props.carbs} g</Box>
            </Box>
        </SimpleGrid>
    );
}
