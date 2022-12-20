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
            <Box layerStyle="mealTabDeleteIconContainer">
                <ConfirmDeleteDialog type="meal" id={props.meal.mealId}>
                    <DeleteIcon />
                </ConfirmDeleteDialog>
            </Box>
        </Tab>
    );
}
