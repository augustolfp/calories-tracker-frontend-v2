import IngredientTable from './IngredientTable';
import { Box } from '@chakra-ui/react';
import { MealIngredient } from '../../../types';

export default function IngredientDash(props: MealIngredient) {
    return <IngredientTable {...props} />;
}
