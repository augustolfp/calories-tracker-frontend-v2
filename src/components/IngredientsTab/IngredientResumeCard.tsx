import { Box, Grid, GridItem } from '@chakra-ui/react';

type Props = {
    kcals: number;
    proteins: number;
    carbs: number;
    fats: number;
};

export default function IngredientResumeCard(props: Props) {
    return (
        <Grid
            templateAreas={`"calories proteins"
"carbs fats"`}
            gridTemplateRows="1fr 1fr"
            gridTemplateColumns="1fr 1fr"
            gridGap={['2px', '4px']}
        >
            <GridItem
                layerStyle="colorfulCard"
                flexDirection="column"
                bg="kcalsColor.500"
                area={'calories'}
                fontSize="2xs"
                p="12px 0"
            >
                <Box>Calorias:</Box>
                <Box>{props.kcals} kCal</Box>
            </GridItem>
            <GridItem
                layerStyle="colorfulCard"
                flexDirection="column"
                bg="proteinsColor.500"
                area={'proteins'}
                fontSize="2xs"
            >
                <Box>Proteinas:</Box>
                <Box>{props.proteins} g</Box>
            </GridItem>
            <GridItem
                layerStyle="colorfulCard"
                flexDirection="column"
                bg="fatsColor.500"
                area={'fats'}
                fontSize="2xs"
            >
                <Box>Gorduras:</Box>
                <Box>{props.fats} g</Box>
            </GridItem>
            <GridItem
                layerStyle="colorfulCard"
                flexDirection="column"
                bg="carbsColor.500"
                area={'carbs'}
                fontSize="2xs"
            >
                <Box>Carboidratos:</Box>
                <Box>{props.carbs} g</Box>
            </GridItem>
        </Grid>
    );
}
