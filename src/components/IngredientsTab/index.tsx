import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import IngredientDash from './IngredientDash';
import { MealIngredient } from '../../types';
import IngredientForm from '../IngredientForm';
import ConfirmDeleteDialog from '../ConfirmDeleteDialog/ConfirmDeleteDialog';
import { DeleteIcon } from '@chakra-ui/icons';

type Props = {
    ingredients: MealIngredient[];
    mealId: number;
};

export default function IngredientsTab(props: Props) {
    return (
        <Tabs variant="ingredientVariant">
            <TabList>
                <Tab>Novo ingrediente</Tab>
                {props.ingredients[0] &&
                    props.ingredients.map((ing, index) => (
                        <Tab key={index}>{ing.name}</Tab>
                    ))}
            </TabList>
            <TabPanels>
                <TabPanel>
                    <IngredientForm mealId={props.mealId} />
                </TabPanel>
                {props.ingredients[0] &&
                    props.ingredients.map((ing, index) => (
                        <TabPanel key={index}>
                            <IngredientDash {...ing} />
                            <Box layerStyle="deleteIngBox">
                                <ConfirmDeleteDialog
                                    type="ingredient"
                                    id={ing.id}
                                >
                                    <DeleteIcon h={3} w={3} color="white" />
                                </ConfirmDeleteDialog>
                            </Box>
                        </TabPanel>
                    ))}
            </TabPanels>
        </Tabs>
    );
}
