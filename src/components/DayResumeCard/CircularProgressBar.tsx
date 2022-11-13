import { CircularProgress, Box, Flex } from '@chakra-ui/react';

type Props = {
    numerator: number;
    denominator: number;
    color: string;
};

export default function CircularProgressBar(props: Props) {
    const percentage = (props.numerator / props.denominator) * 100;
    return (
        <Box>
            <CircularProgress
                position="absolute"
                capIsRound={true}
                value={percentage}
                color="white"
                trackColor="transparent"
                thickness="12px"
                size="70px"
            />
            <CircularProgress
                position="relative"
                capIsRound={true}
                value={100}
                color="white"
                trackColor="transparent"
                thickness="4px"
                size="70px"
            />
        </Box>
    );
}
