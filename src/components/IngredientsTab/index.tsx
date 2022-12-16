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
import ClampLines from 'react-clamp-lines';
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
                    <Flex direction="column" align="center">
                        <IngredientForm mealId={props.mealId} />
                    </Flex>
                </TabPanel>
                {props.ingredients[0] &&
                    props.ingredients.map((ing, index) => (
                        <TabPanel key={index}>
                            <IngredientDash {...ing} />
                            <Box
                                position="absolute"
                                right={2}
                                top={2}
                                minW={0}
                                p={0}
                                m={0}
                                borderRadius="full"
                                bg="pageGreen.500"
                            >
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
