import MealTable from './MealTable';
import IngredientsTab from '../IngredientsTab';
import { Box, Flex } from '@chakra-ui/react';
import { DayMeal } from '../../types';

export default function MealDash(props: DayMeal) {
    return (
        <Flex direction="column" align="center">
            <Box layerStyle="tabContentSubTitle">
                {props.mealDescription ? props.mealDescription : null}
            </Box>
            <MealTable {...props} />
            <Box color="pageGreen.400" fontSize="3xl">
                Ingredientes:
            </Box>
            <IngredientsTab
                ingredients={props.ingredientList}
                mealId={props.mealId}
            />
        </Flex>
    );
}
