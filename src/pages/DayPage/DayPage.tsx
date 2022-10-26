import { Day, useData } from '../../hooks/useData';
import { Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import DayTable from './DayTable';

export default function DayPage() {
    const { data } = useData();
    const { id } = useParams();

    const dayData = data!.find((obj) => obj.id === Number(id));

    return dayData && <DayTable {...dayData} />;
}
