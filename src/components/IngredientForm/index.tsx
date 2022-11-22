import SearchIngredients from '../SearchIngredients';
import CreateCustomIngredient from '../CreateCustomIngredient';
import { Flex } from '@chakra-ui/react';

type Props = {
    mealId: number;
};

export default function IngredientForm(props: Props) {
    return (
        <>
            <SearchIngredients mealId={props.mealId} />
            <Flex w="full" justify="center" textStyle="h2">
                Ou
            </Flex>
            <CreateCustomIngredient mealId={props.mealId} />
        </>
    );
}
