import { Tab, Box, Button } from '@chakra-ui/react';
import { DayMeal } from '../../types';
import { useDelete } from './../../hooks/useDelete';

type Props = {
    meal: DayMeal;
};

export default function MealTab(props: Props) {
    const { mutate: deleteMeal } = useDelete();
    return (
        <Tab>
            <Box textAlign="left">
                {props.meal.mealName ? props.meal.mealName : 'Sem nome'}
                <Box as="p" textStyle="p">
                    {props.meal.mealDescription
                        ? props.meal.mealDescription
                        : null}
                </Box>
            </Box>
            <Button
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
