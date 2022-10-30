import MealTable from './MealTable';
import IngredientAccordion from '../IngredientAccordion';
import { Box } from '@chakra-ui/react';

export default function MealDash(props: any) {
    return (
        <>
            {'Descrição: '}
            {props?.mealDescription ? props.mealDescription : 'Sem descrição'}
            <MealTable {...props} />
            Ingredientes:
            <IngredientAccordion {...props.ingredientList} />
        </>
    );
}
