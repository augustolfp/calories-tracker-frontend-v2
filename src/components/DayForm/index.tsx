import { useState } from 'react';
import {
    Input,
    Button,
    FormControl,
    FormLabel,
    CircularProgress,
    Box,
} from '@chakra-ui/react';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';
import { useDayCreator } from '../../hooks/useDayCreator';

export default function DayForm() {
    const { mutate: newDay, isLoading, isError, error } = useDayCreator();

    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState('');
    const [caloriesTarget, setCaloriesTarget] = useState('');
    const [proteinsTarget, setProteinsTarget] = useState('');

    async function handleNewDay(e: any) {
        e.preventDefault();
        const body = {
            day: date.toISOString(),
            notes,
            caloriesTarget: Number(caloriesTarget),
            proteinsTarget: Number(proteinsTarget),
        };
        newDay(body);
    }

    return (
        <form onSubmit={handleNewDay}>
            <FormControl isRequired>
                <FormLabel>Data</FormLabel>
                <SingleDatepicker
                    configs={{
                        dayNames: 'Dom Seg Ter Qua Qui Sex Sab'.split(' '),
                        monthNames:
                            'Jan Fev Mar Abr Mai Jun Jul Ago Set Out Nov Dez'.split(
                                ' '
                            ),
                        dateFormat: 'dd-MM-yyyy',
                    }}
                    name="date-input"
                    date={date}
                    onDateChange={setDate}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Notas</FormLabel>
                <Input
                    type="text"
                    name="notes"
                    value={notes}
                    onChange={(e) => {
                        setNotes(e.target.value);
                    }}
                    placeholder="Insira uma anotação"
                    disabled={isLoading}
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Proteinas</FormLabel>
                <Input
                    type="number"
                    name="proteinsTarget"
                    value={proteinsTarget}
                    onChange={(e) => {
                        setProteinsTarget(e.target.value);
                    }}
                    placeholder="Alvo de proteinas (em g)"
                    disabled={isLoading}
                    required
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Calorias</FormLabel>
                <Input
                    type="number"
                    name="caloriesTarget"
                    value={caloriesTarget}
                    onChange={(e) => {
                        setCaloriesTarget(e.target.value);
                    }}
                    placeholder="Alvo de kCals"
                    disabled={isLoading}
                    required
                />
            </FormControl>
            <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                    <CircularProgress isIndeterminate size={8} color="purple" />
                ) : (
                    'Adicionar'
                )}
            </Button>
        </form>
    );
}
