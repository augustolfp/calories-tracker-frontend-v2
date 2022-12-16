import { Box, Grid, GridItem, Flex, Center } from '@chakra-ui/react';
import CircularProgressBar from './CircularProgressBar';
import FractionDisplay from './FractionDisplay';

type Props = {
    id: number;
    day: string;
    notes: string;
    caloriesTarget: number;
    proteinsTarget: number;
    carbs: number;
    fats: number;
    proteins: number;
    kcals: number;
};

export default function DayResumeCard(props: Props) {
    return (
        <Grid
            h={[null, '100%']}
            maxW="400px"
            templateAreas={`"calories proteins fats"
        "calories proteins carbs"`}
            gridTemplateRows="1fr 1fr"
            gridTemplateColumns="1fr 1fr 1fr"
            gridGap={['8px', '12px']}
            justifyContent="stretch"
        >
            <GridItem
                dir="column"
                layerStyle="nutrient"
                bg="#e07a60"
                area={'calories'}
            >
                <Box>kCals</Box>
                <Center flexDirection="column" h="full">
                    <CircularProgressBar
                        numerator={props.kcals}
                        denominator={props.caloriesTarget}
                    />
                    <FractionDisplay
                        numerator={props.kcals}
                        denominator={props.caloriesTarget}
                    />
                    <Box>kCal</Box>
                </Center>
            </GridItem>
            <GridItem
                dir="column"
                layerStyle="nutrient"
                bg="#e5ab7e"
                area={'fats'}
            >
                <Box>Gorduras</Box>
                <Center h="full">{props.fats} g</Center>
            </GridItem>
            <GridItem
                dir="column"
                layerStyle="nutrient"
                bg="#f687b3"
                area={'carbs'}
            >
                <Box>Carbos</Box>
                <Center h="full">{props.carbs} g</Center>
            </GridItem>
            <GridItem
                dir="column"
                layerStyle="nutrient"
                bg="#c4869d"
                area={'proteins'}
            >
                <Box>Proteinas</Box>
                <Center flexDirection="column" h="full">
                    <CircularProgressBar
                        numerator={props.proteins}
                        denominator={props.proteinsTarget}
                    />
                    <FractionDisplay
                        numerator={props.proteins}
                        denominator={props.proteinsTarget}
                    />
                    <Box>g</Box>
                </Center>
            </GridItem>
        </Grid>
    );
}
