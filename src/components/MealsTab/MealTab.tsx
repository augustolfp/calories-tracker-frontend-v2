import { Tab, Box, Button, VStack } from '@chakra-ui/react';
import { DayMeal } from '../../types';
import { useDelete } from './../../hooks/useDelete';

type Props = {
    meal: DayMeal;
};

export default function MealTab(props: Props) {
    const { mutate: deleteMeal } = useDelete();
    return (
        <Tab>
            <Box layerStyle="mealTabSummaryTitle">
                {props.meal.mealName ? props.meal.mealName : 'Sem nome'}
            </Box>
            <Box layerStyle="mealTabSummarySubTitle">
                {props.meal.mealDescription ? props.meal.mealDescription : null}
            </Box>
            <Button
                size="xs"
                position="absolute"
                top="8px"
                right="8px"
                onClick={() =>
                    deleteMeal({
                        type: 'meal',
                        id: props.meal.mealId,
                    })
                }
            >
                x
            </Button>
        </Tab>
    );
}
