import dayjs from 'dayjs';
import { weekDaysInPt } from '../utils/weekDays';
import weekday from 'dayjs/plugin/weekday';
import { Center } from '@chakra-ui/react';

dayjs.extend(weekday);

type Props = {
    day: string;
};

export default function FormatDate(props: Props) {
    const formattedDay = dayjs(props.day).format('DD-MM-YYYY');
    const weekDay = weekDaysInPt[dayjs(props.day).weekday()];

    return (
        <Center as="h4" h="100%" w="100%" textStyle="h4">
            {formattedDay}, {weekDay}
        </Center>
    );
}
