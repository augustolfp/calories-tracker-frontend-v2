import dayjs from 'dayjs';
import { weekDaysInPt } from './weekDays';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(weekday);

export default function formatDate(day: string) {
    const formattedDay = dayjs(day).format('DD-MM-YYYY');
    const weekDay = weekDaysInPt[dayjs(day).weekday()];
    return `${formattedDay}, ${weekDay}`;
}
