import { useState } from 'react';
import {
    Input,
    Button,
    FormControl,
    FormLabel,
    CircularProgress,
    Box,
} from '@chakra-ui/react';
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

    const [day, setDay] = useState('');
    const [notes, setNotes] = useState('');
    const [caloriesTarget, setCaloriesTarget] = useState('');
    const [proteinsTarget, setProteinsTarget] = useState('');

    async function handleNewDay(e: any) {
        e.preventDefault();
        const body = {
            day,
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
                <Input
                    type="text"
                    name="day"
                    value={day}
                    onChange={(e) => {
                        setDay(e.target.value);
                    }}
                    placeholder="Insira uma data"
                    disabled={isLoading}
                    required
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
