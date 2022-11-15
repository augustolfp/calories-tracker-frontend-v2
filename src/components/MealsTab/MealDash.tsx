import MealTable from './MealTable';
import IngredientsTab from '../IngredientsTab';
import { Box } from '@chakra-ui/react';
import { DayMeal } from '../../types';

export default function MealDash(props: DayMeal) {
    return (
        <>
            {'Descrição: '}
            {props.mealDescription ? props.mealDescription : 'Sem descrição'}
            <MealTable {...props} />
            Ingredientes:
            <IngredientsTab
                ingredients={props.ingredientList}
                mealId={props.mealId}
            />
        </>
    );
}
