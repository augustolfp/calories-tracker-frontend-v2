import { weekDaysInPt } from './weekDays';
import { Box } from '@chakra-ui/react';

function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
}

type Props = {
    day: string;
};

export default function FormatDate(props: Props) {
    const date = new Date(props.day);
    const weekDay = weekDaysInPt[date.getUTCDay()];

    return (
        <>
            <Box as="h1" textStyle="h1" fontWeight="600" lineHeight={8}>
                {weekDay}
            </Box>
            <Box as="h2" textStyle="h4" fontWeight="600" textAlign="center">
                {[
                    padTo2Digits(date.getUTCDate()),
                    padTo2Digits(date.getUTCMonth() + 1),
                    date.getUTCFullYear(),
                ].join('/')}
            </Box>
        </>
    );
}
