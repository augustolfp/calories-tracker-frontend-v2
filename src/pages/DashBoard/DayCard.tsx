import { Box } from '@chakra-ui/react';
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
            <Box as="ul" layerStyle="card">
                <FormatDate day={props.day} />
                <Box as="li">Gorduras: {props.fats}</Box>
                <Box as="li">Carbos: {props.carbs}</Box>
                <Box as="li">Proteinas: {props.proteins}</Box>
                <Box as="li">kCals: {props.kcals}</Box>
            </Box>
        </Link>
    );
}
