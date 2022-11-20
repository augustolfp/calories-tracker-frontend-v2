import { Grid, GridItem } from '@chakra-ui/react';
import { DayMeal } from '../../types';

export default function MealResumeGrid(props: DayMeal) {
    return (
        <Grid
            mb="12px"
            w="full"
            templateAreas={`"calories proteins"
    "carbs fats"`}
            gridTemplateRows={['60px 60px', '80px 80px']}
            gridTemplateColumns="1fr 1fr"
            gridGap={['8px', '16px']}
        >
            <GridItem
                dir="column"
                layerStyle="colorfulCard"
                bg="kcalsColor.500"
                area={'calories'}
            >
                Calorias: {props.kcals} kCal
            </GridItem>
            <GridItem
                dir="column"
                layerStyle="colorfulCard"
                bg="proteinsColor.500"
                area={'proteins'}
            >
                Proteinas: {props.proteins} g
            </GridItem>
            <GridItem
                dir="column"
                layerStyle="colorfulCard"
                bg="fatsColor.500"
                area={'fats'}
            >
                Gorduras: {props.fats} g
            </GridItem>
            <GridItem
                dir="column"
                layerStyle="colorfulCard"
                bg="carbsColor.500"
                area={'carbs'}
            >
                Carboidratos: {props.carbs} g
            </GridItem>
        </Grid>
    );
}
