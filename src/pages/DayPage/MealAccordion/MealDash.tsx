import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import MealTable from './MealTable';
import IngredientAccordion from '../IngredientAccordion';

export default function MealDash(props: any) {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                    <Box flex="1" textAlign="left">
                        {props?.mealName ? props.mealName : 'Sem nome'}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Grid
                    templateAreas={[
                        `"table"
                    "ingredients"
                    "description"`,
                        `"table"
                    "ingredients"
                    "description"`,
                        `"table ingredients"
                    "description ingredients"`,
                    ]}
                    gridTemplateRows={[
                        '300px 1fr 100px',
                        '300px 1fr 100px',
                        '1fr 120px',
                    ]}
                    gridTemplateColumns={['1fr', '1fr', '1fr 1fr']}
                    gridGap="3"
                >
                    <GridItem layerStyle="card" area={'description'}>
                        Descrição:
                        {props?.mealDescription
                            ? props.mealDescription
                            : 'Sem descrição'}
                    </GridItem>
                    <GridItem layerStyle="card" area={'table'}>
                        <MealTable {...props} />
                    </GridItem>
                    <GridItem layerStyle="card" area={'ingredients'}>
                        Ingredientes:
                        <IngredientAccordion {...props.ingredientList} />
                    </GridItem>
                </Grid>
            </AccordionPanel>
        </AccordionItem>
    );
}
