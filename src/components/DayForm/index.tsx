import { useState } from 'react';
import {
    Input,
    Button,
    FormControl,
    FormLabel,
    CircularProgress,
    Box,
    Grid,
    GridItem,
    Flex,
} from '@chakra-ui/react';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import { useDayCreator } from '../../hooks/useDayCreator';

import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react';

export default function DayForm() {
    const { mutate: newDay, isLoading, isError, error } = useDayCreator();

    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState('');
    const [caloriesTarget, setCaloriesTarget] = useState(2000);
    const [proteinsTarget, setProteinsTarget] = useState(100);

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
            <Grid
                templateAreas={`"notes date"
                                "kcals kcals"
                                "proteins proteins"
                                "button button"`}
                gridTemplateColumns="1fr 1fr"
                gridTemplateRows="1.5fr 1fr 1fr 1fr"
                gridGap={['8px', '12px']}
            >
                <GridItem
                    area="notes"
                    layerStyle="colorfulCard"
                    bg="pageGreen.500"
                    px="20px"
                >
                    <FormControl>
                        <FormLabel color="white" fontWeight="700">
                            Anotações
                        </FormLabel>
                        <Input
                            variant="unstyled"
                            type="text"
                            name="notes"
                            value={notes}
                            onChange={(e) => {
                                setNotes(e.target.value);
                            }}
                            placeholder="Escreva aqui..."
                            disabled={isLoading}
                        />
                    </FormControl>
                </GridItem>
                <GridItem
                    area="date"
                    layerStyle="colorfulCard"
                    bg="pageGreen.500"
                    py="10px"
                    px="20px"
                >
                    <FormControl isRequired>
                        <FormLabel color="white" fontWeight="700">
                            Data
                        </FormLabel>
                        <Box color="pageGreen.500">
                            <SingleDatepicker
                                propsConfigs={{
                                    dateNavBtnProps: {
                                        color: 'pageGreen.500',
                                        colorScheme: 'green',
                                        variant: 'outline',
                                    },
                                    dayOfMonthBtnProps: {
                                        defaultBtnProps: {
                                            color: 'pageGreen.500',
                                            borderColor: 'pageGreen.500',
                                            _hover: {
                                                background: 'gray.300',
                                            },
                                        },
                                        isInRangeBtnProps: {
                                            color: 'yellow',
                                        },
                                        selectedBtnProps: {
                                            background: 'pageGreen.500',
                                            color: 'white',
                                        },
                                        todayBtnProps: {
                                            background: 'teal.400',
                                        },
                                    },
                                    inputProps: {
                                        color: 'white',
                                        fontWeight: '700',
                                        size: 'sm',
                                    },
                                }}
                                configs={{
                                    dayNames:
                                        'Dom Seg Ter Qua Qui Sex Sab'.split(
                                            ' '
                                        ),
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
                        </Box>
                    </FormControl>
                </GridItem>
                <GridItem
                    area="kcals"
                    layerStyle="colorfulCard"
                    bg="kcalsColor.500"
                    px="20px"
                >
                    <FormControl isRequired>
                        <Flex justifyContent="space-between" gap="20px">
                            <Box w="full">
                                <FormLabel color="white" fontWeight="700">
                                    Alvo de Calorias
                                </FormLabel>
                                <Slider
                                    aria-label="Definir alvo de calorias"
                                    defaultValue={caloriesTarget}
                                    min={1000}
                                    max={6000}
                                    step={50}
                                    onChange={(val) => setCaloriesTarget(val)}
                                >
                                    <SliderTrack bg="white">
                                        <SliderFilledTrack bg="pageGreen.500" />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>
                            </Box>
                            <Flex
                                direction="column"
                                align="center"
                                justify="center"
                            >
                                <Box>{caloriesTarget}</Box>
                                <Box>kCal</Box>
                            </Flex>
                        </Flex>
                    </FormControl>
                </GridItem>
                <GridItem
                    area="proteins"
                    layerStyle="colorfulCard"
                    bg="proteinsColor.500"
                    px="20px"
                >
                    <FormControl isRequired>
                        <Flex justifyContent="space-between" gap="20px">
                            <Box w="full">
                                <FormLabel color="white" fontWeight="700">
                                    Alvo de proteinas
                                </FormLabel>
                                <Slider
                                    aria-label="Definir alvo de proteinas"
                                    defaultValue={proteinsTarget}
                                    min={20}
                                    max={300}
                                    step={5}
                                    onChange={(val) => setProteinsTarget(val)}
                                >
                                    <SliderTrack bg="white">
                                        <SliderFilledTrack bg="pageGreen.500" />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>
                            </Box>
                            <Flex
                                direction="column"
                                align="center"
                                justify="center"
                            >
                                <Box>{proteinsTarget}</Box>
                                <Box>g</Box>
                            </Flex>
                        </Flex>
                    </FormControl>
                </GridItem>
                <GridItem area="button">
                    <Button
                        w="full"
                        h="full"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <CircularProgress
                                isIndeterminate
                                size={8}
                                color="purple"
                            />
                        ) : (
                            'Adicionar'
                        )}
                    </Button>
                </GridItem>
            </Grid>
        </form>
    );
}
