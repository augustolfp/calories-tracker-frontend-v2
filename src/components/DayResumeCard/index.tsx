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
        <Box layerStyle="dayResumeCardGrid">
            <GridItem
                layerStyle="nutrient"
                bg="kcalsColor.500"
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
            <GridItem layerStyle="nutrient" bg="fatsColor.500" area={'fats'}>
                <Box>Gorduras</Box>
                <Center h="full">{props.fats} g</Center>
            </GridItem>
            <GridItem layerStyle="nutrient" bg="carbsColor.500" area={'carbs'}>
                <Box>Carbos</Box>
                <Center h="full">{props.carbs} g</Center>
            </GridItem>
            <GridItem
                layerStyle="nutrient"
                bg="proteinsColor.500"
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
        </Box>
    );
}
