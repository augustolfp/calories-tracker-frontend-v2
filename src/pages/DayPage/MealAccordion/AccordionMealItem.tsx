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

export default function AccordionMealItem(props: any) {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                        {props?.mealName ? props.mealName : 'Sem nome'}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Grid
                    templateAreas={`"table table ingredients"
                    "description description ingredients"`}
                    gridTemplateRows={'300px 100px'}
                    gridTemplateColumns={'200px 200px 200px'}
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
                    </GridItem>
                </Grid>
            </AccordionPanel>
        </AccordionItem>
    );
}
