import { Box } from '@chakra-ui/react';

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
        <Box
            as="ul"
            p={8}
            maxWidth="500px"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
        >
            <Box as="li">Dia: {props.day}</Box>
            <Box as="li">Gorduras: {props.fats}</Box>
            <Box as="li">Carbos: {props.carbs}</Box>
            <Box as="li">Proteinas: {props.proteins}</Box>
            <Box as="li">kCals: {props.kcals}</Box>
        </Box>
    );
}
