import IngredientTable from './IngredientTable';
import { Box } from '@chakra-ui/react';
import { MealIngredient } from '../../../hooks/useData';

export default function IngredientDash(props: MealIngredient) {
    return <IngredientTable {...props} />;
}
