import SearchIngredients from '../SearchIngredients';
import CreateCustomIngredient from '../CreateCustomIngredient';
import { Flex, Box } from '@chakra-ui/react';

type Props = {
    mealId: number;
};

export default function IngredientForm(props: Props) {
    return (
        <Box layerStyle="ingFormContainer">
            <SearchIngredients mealId={props.mealId} />
            <Flex justify="center" align="center" textStyle="h2" mx="4px">
                Ou
            </Flex>
            <CreateCustomIngredient mealId={props.mealId} />
        </Box>
    );
}
