import { Tab, Box, Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
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
                variant="deleteMeal"
                position="absolute"
                minW={0}
                p={0}
                m={0}
                borderRadius="full"
                top="4px"
                right="4px"
                onClick={() =>
                    deleteMeal({
                        type: 'meal',
                        id: props.meal.mealId,
                    })
                }
            >
                <DeleteIcon h="20px" w="20px" />
            </Button>
        </Tab>
    );
}
