import MealTable from './MealTable';
import IngredientsTab from '../IngredientsTab';
import { Box } from '@chakra-ui/react';

export default function MealDash(props: any) {
    return (
        <>
            {'Descrição: '}
            {props?.mealDescription ? props.mealDescription : 'Sem descrição'}
            <MealTable {...props} />
            Ingredientes:
            <IngredientsTab {...props.ingredientList} />
        </>
    );
}
