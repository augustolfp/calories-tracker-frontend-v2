import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Box,
    Flex,
} from '@chakra-ui/react';
import IngredientDash from './IngredientDash';
import { MealIngredient } from '../../types';
import IngredientForm from '../IngredientForm';
import { useDelete } from '../../hooks/useDelete';
import ClampLines from 'react-clamp-lines';

type Props = {
    ingredients: MealIngredient[];
    mealId: number;
};

export default function IngredientsTab(props: Props) {
    const { mutate: deleteIngredient } = useDelete();

    return (
        <Tabs variant="ingredientVariant">
            <TabList>
                <Flex wrap="wrap-reverse">
                    <Tab>Novo ingrediente</Tab>
                    {props.ingredients[0] &&
                        props.ingredients.map((ing, index) => (
                            <Tab key={index}>
                                <ClampLines
                                    text={ing.name}
                                    id="1"
                                    lines={1}
                                    buttons={false}
                                />
                            </Tab>
                        ))}
                </Flex>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <IngredientForm mealId={props.mealId} />
                </TabPanel>
                {props.ingredients[0] &&
                    props.ingredients.map((ing, index) => (
                        <TabPanel key={index}>
                            <IngredientDash {...ing} />
                            <Box
                                position="absolute"
                                top="4px"
                                right="4px"
                                onClick={() =>
                                    deleteIngredient({
                                        type: 'ingredient',
                                        id: ing.id,
                                    })
                                }
                            >
                                x
                            </Box>
                        </TabPanel>
                    ))}
            </TabPanels>
        </Tabs>
    );
}
