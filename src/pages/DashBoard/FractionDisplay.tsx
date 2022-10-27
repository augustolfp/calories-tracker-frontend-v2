import { Box, Flex } from '@chakra-ui/react';

type Props = {
    numerator: number | string;
    denominator: number | string;
};

export default function FractionDisplay(props: Props) {
    return (
        <Flex justify="center" align="center">
            <Box layerStyle="nutrientNumber">
                <Box layerStyle="fracNumerator">{props.numerator}</Box>
                <Box layerStyle="fracDenominator">{props.denominator}</Box>
            </Box>
            <Box fontSize="12px" fontWeight="bold" color="white">
                g
            </Box>
        </Flex>
    );
}
