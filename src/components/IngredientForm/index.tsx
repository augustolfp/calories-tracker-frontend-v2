import SearchIngredients from '../SearchIngredients';
import CreateCustomIngredient from '../CreateCustomIngredient';

type Props = {
    mealId: number;
};

export default function IngredientForm(props: Props) {
    return (
        <>
            <SearchIngredients mealId={props.mealId} />
            <CreateCustomIngredient mealId={props.mealId} />
        </>
    );
}
