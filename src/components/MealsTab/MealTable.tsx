import { Grid, GridItem } from '@chakra-ui/react';
import { DayMeal } from '../../types';

export default function MealTable(props: DayMeal) {
    return (
        <Grid
            templateAreas={`"calories proteins"
    "carbs fats"`}
            gridTemplateRows={['40px 40px', '60px 60px']}
            gridTemplateColumns={['96px 96px', '180px 180px']}
            gridGap={['4px', '8px']}
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
