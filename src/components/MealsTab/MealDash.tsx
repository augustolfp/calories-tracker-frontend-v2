import MealResumeGrid from './MealResumeGrid';
import IngredientsTab from '../IngredientsTab';
import { Box, Flex } from '@chakra-ui/react';
import { DayMeal } from '../../types';

export default function MealDash(props: DayMeal) {
    return (
        <Flex direction="column">
            <MealResumeGrid {...props} />
            <Box layerStyle="tabContentSubTitle">Ingredientes</Box>
            <IngredientsTab
                ingredients={props.ingredientList}
                mealId={props.mealId}
            />
        </Flex>
    );
}
