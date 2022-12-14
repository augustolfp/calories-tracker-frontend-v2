import { Box, Flex } from '@chakra-ui/react';

type Props = {
    numerator: number | string;
    denominator: number | string;
};

export default function FractionDisplay(props: Props) {
    return (
        <Flex layerStyle="nutrientNumber">
            <Box>{props.numerator}</Box>
            <Box layerStyle="fracDenominator">{props.denominator}</Box>
        </Flex>
    );
}
