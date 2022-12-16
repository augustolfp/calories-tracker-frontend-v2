import { Tab, Box, Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { DayMeal } from '../../types';
import ConfirmDeleteDialog from '../ConfirmDeleteDialog/ConfirmDeleteDialog';

type Props = {
    meal: DayMeal;
};

export default function MealTab(props: Props) {
    return (
        <Tab>
            <Box layerStyle="mealTabSummaryTitle">
                {props.meal.mealName ? props.meal.mealName : 'Sem nome'}
            </Box>
            <Box layerStyle="mealTabSummarySubTitle">
                {props.meal.mealDescription ? props.meal.mealDescription : null}
            </Box>
            <Box
                position="absolute"
                minW={0}
                p={0}
                m={0}
                borderRadius="full"
                top="4px"
                right="4px"
            >
                <ConfirmDeleteDialog type="meal" id={props.meal.mealId}>
                    <DeleteIcon />
                </ConfirmDeleteDialog>
            </Box>
        </Tab>
    );
}
