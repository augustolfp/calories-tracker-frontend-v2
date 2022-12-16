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
                Calorias: {props.kcals} kCal
            </Box>
            <Box layerStyle="colorfulCard" bg="proteinsColor.500">
                Proteinas: {props.proteins} g
            </Box>
            <Box layerStyle="colorfulCard" bg="fatsColor.500">
                Gorduras: {props.fats} g
            </Box>
            <Box layerStyle="colorfulCard" bg="carbsColor.500">
                Carboidratos: {props.carbs} g
            </Box>
        </SimpleGrid>
    );
}
