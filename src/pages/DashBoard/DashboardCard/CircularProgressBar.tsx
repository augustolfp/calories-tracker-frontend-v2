import { CircularProgress } from '@chakra-ui/react';

type Props = {
    numerator: number;
    denominator: number;
    color: string;
};

export default function CircularProgressBar(props: Props) {
    const percentage = (props.numerator / props.denominator) * 100;
    return (
        <CircularProgress
            value={percentage}
            color={props.color}
            thickness="12px"
            size="70px"
        />
    );
}
