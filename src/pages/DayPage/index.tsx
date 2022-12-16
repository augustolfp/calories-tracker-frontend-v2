import { useData } from '../../hooks/useData';
import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import MealsTab from '../../components/MealsTab';
import formatDate from '../../utils/formatDate';
import Header from './Header';
import { Day } from '../../types';

type FormattedDateType = {
    fullDate: string;
    weekDay: string;
};

export default function DayPage() {
    const { data } = useData();
    const { id } = useParams();
    let dayData: Day | undefined = undefined;
    let formattedDate: FormattedDateType | undefined = undefined;

    if (data) {
        dayData = data.find((obj) => obj.id === Number(id));
    }

    if (dayData) {
        formattedDate = formatDate(dayData.day);
    }

    return (
        <>
            {dayData && formattedDate ? (
                <>
                    <Header
                        day={dayData}
                        fullDate={formattedDate.fullDate}
                        weekDay={formattedDate.weekDay}
                    />
                    <MealsTab meals={dayData.dayMeals} dayId={Number(id)} />
                </>
            ) : null}
        </>
    );
}
