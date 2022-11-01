import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import IngredientDash from './IngredientDash';
import { MealIngredient } from '../../../hooks/useData';
import IngredientForm from '../../../components/IngredientForm';

type Props = {
    ingredients: MealIngredient[];
    mealId: number;
};

export default function IngredientsTab(props: Props) {
    return (
        <Tabs orientation="vertical">
            <TabList>
                {props.ingredients[0] &&
                    props.ingredients.map((ing, index) => (
                        <Tab key={index}>
                            {ing.name ? ing.name : 'Sem nome'}
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
