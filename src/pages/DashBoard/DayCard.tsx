import { Box, Grid, GridItem, Flex, CircularProgress } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import FormatDate from './FormatDate';

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

export default function DayCard(props: Props) {
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
                        <CircularProgress
                            value={(props.kcals / props.caloriesTarget) * 100}
                            color="green.600"
                            thickness="12px"
                            size="70px"
                        />
                        <Flex justify="center" align="center">
                            <Box layerStyle="nutrientNumber">
                                <Box layerStyle="fracNumerator">
                                    {props.kcals}
                                </Box>
                                <Box layerStyle="fracDenominator">
                                    {props.caloriesTarget}
                                </Box>
                            </Box>
                            <Box
                                fontSize="12px"
                                fontWeight="bold"
                                color="white"
                            >
                                g
                            </Box>
                        </Flex>
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
                        <CircularProgress
                            value={
                                (props.proteins / props.proteinsTarget) * 100
                            }
                            color="red.600"
                            thickness="12px"
                            size="70px"
                        />
                        <Flex justify="center" align="center">
                            <Box layerStyle="nutrientNumber">
                                <Box layerStyle="fracNumerator">
                                    {props.proteins}
                                </Box>
                                <Box layerStyle="fracDenominator">
                                    {props.proteinsTarget}
                                </Box>
                            </Box>
                            <Box
                                fontSize="12px"
                                fontWeight="bold"
                                color="white"
                            >
                                g
                            </Box>
                        </Flex>
                    </GridItem>
                </Grid>
            </Box>
        </Link>
    );
}
