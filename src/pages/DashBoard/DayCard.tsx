import { Box, Grid, GridItem, Divider } from '@chakra-ui/react';
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
                            "calories notes notes"`}
                    gridTemplateRows={'50px 50px 50px 80px'}
                    gridTemplateColumns={'80px 80px 100px'}
                    gridGap="3"
                >
                    <GridItem layerStyle="nutrient" area={'date'}>
                        <FormatDate day={props.day} />
                    </GridItem>
                    <GridItem layerStyle="nutrient" area={'calories'}>
                        kCals: {props.kcals}
                    </GridItem>
                    <GridItem layerStyle="nutrient" area={'fats'}>
                        Gorduras: {props.fats}
                    </GridItem>
                    <GridItem layerStyle="nutrient" area={'carbs'}>
                        Carbos: {props.carbs}
                    </GridItem>
                    <GridItem layerStyle="nutrient" area={'notes'}>
                        Notas: {props.notes}
                    </GridItem>
                    <GridItem layerStyle="nutrient" area={'proteins'}>
                        proteinas: {props.proteins}
                    </GridItem>
                </Grid>
            </Box>
        </Link>
    );
}
