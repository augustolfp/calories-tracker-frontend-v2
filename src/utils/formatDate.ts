import { weekDaysInPt } from './weekDays';

function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
}

export default function formatDate(day: string) {
    const date = new Date(day);
    const weekDay = weekDaysInPt[date.getUTCDay()];

    const result = {
        fullDate: `${[
            padTo2Digits(date.getUTCDate()),
            padTo2Digits(date.getUTCMonth() + 1),
            date.getUTCFullYear(),
        ].join('/')}`,
        weekDay: weekDay,
    };

    return result;
}
