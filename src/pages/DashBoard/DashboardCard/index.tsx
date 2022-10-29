import { Box, Grid, GridItem, Flex } from '@chakra-ui/react';
import CircularProgressBar from './CircularProgressBar';
import { Link } from 'react-router-dom';
import FormatDate from '../../../components/FormatDate';
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

export default function DashboardCard(props: Props) {
    return (
        <Link to={`/day/${props.id}`}>
            <Box layerStyle="card">
                <Grid
                    templateAreas={`"date date date" 
                            "calories proteins fats"
                            "calories proteins carbs"
                            "notes notes notes"`}
                    gridTemplateRows={'80px 80px 80px 100px'}
                    gridTemplateColumns={'90px 90px 90px'}
                    gridGap="3"
                >
                    <GridItem
                        layerStyle="nutrient"
                        bg="purple.300"
                        area={'date'}
                    >
                        <FormatDate day={props.day} />
                    </GridItem>
                    <GridItem
                        layerStyle="nutrient"
                        bg="green.300"
                        area={'calories'}
                    >
                        <Box layerStyle="nutrientTitle">kCals</Box>
                        <CircularProgressBar
                            numerator={props.kcals}
                            denominator={props.caloriesTarget}
                            color="green.600"
                        />
                        <FractionDisplay
                            numerator={props.kcals}
                            denominator={props.caloriesTarget}
                        />
                    </GridItem>
                    <GridItem layerStyle="nutrient" bg="cyan.300" area={'fats'}>
                        <Flex direction="column" align="center">
                            <Box layerStyle="nutrientTitle">Gorduras</Box>
                            <Box layerStyle="nutrientNumber">
                                {props.fats} g
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem
                        layerStyle="nutrient"
                        bg="pink.300"
                        area={'carbs'}
                    >
                        <Flex direction="column" align="center">
                            <Box layerStyle="nutrientTitle">Carbos</Box>
                            <Box layerStyle="nutrientNumber">
                                {props.carbs} g
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem
                        as="div"
                        layerStyle="nutrient"
                        bg="orange.300"
                        area={'notes'}
                        boxShadow="2xl"
                    >
                        <Box as="h5" p={3} textStyle="h5">
                            Notas: {props.notes}
                        </Box>
                    </GridItem>
                    <GridItem
                        layerStyle="nutrient"
                        bg="red.300"
                        area={'proteins'}
                    >
                        <Box layerStyle="nutrientTitle">Proteinas</Box>
                        <CircularProgressBar
                            numerator={props.proteins}
                            denominator={props.proteinsTarget}
                            color="red.600"
                        />
                        <FractionDisplay
                            numerator={props.proteins}
                            denominator={props.proteinsTarget}
                        />
                    </GridItem>
                </Grid>
            </Box>
        </Link>
    );
}
