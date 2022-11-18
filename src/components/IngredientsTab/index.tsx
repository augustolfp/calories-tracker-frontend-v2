import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import IngredientDash from './IngredientDash';
import { MealIngredient } from '../../types';
import IngredientForm from '../IngredientForm';
import { useDelete } from '../../hooks/useDelete';

type Props = {
    ingredients: MealIngredient[];
    mealId: number;
};

export default function IngredientsTab(props: Props) {
    const { mutate: deleteIngredient } = useDelete();

    return (
        <Tabs orientation="horizontal">
            <TabList>
                {props.ingredients[0] &&
                    props.ingredients.map((ing, index) => (
                        <Tab key={index}>
                            {ing.name ? ing.name : 'Sem nome'}
                            <Box
                                onClick={() =>
                                    deleteIngredient({
                                        type: 'ingredient',
                                        id: ing.id,
                                    })
                                }
                            >
                                x
                            </Box>
                        </Tab>
                    ))}

                <Tab>+</Tab>
            </TabList>
            <TabPanels>
                {props.ingredients[0] &&
                    props.ingredients.map((ing, index) => (
                        <TabPanel key={index}>
                            <IngredientDash {...ing} />
                        </TabPanel>
                    ))}

                <TabPanel>
                    <IngredientForm mealId={props.mealId} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
