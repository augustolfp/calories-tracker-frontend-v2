import MealDash from './MealDash';
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Box,
    Button,
    Flex,
} from '@chakra-ui/react';
import MealForm from '../../../components/MealForm';
import { DayMeal } from '../../../types';
import { useDelete } from '../../../hooks/useDelete';
import { useMediaQuery, VStack } from '@chakra-ui/react';

type Props = {
    meals: DayMeal[] | undefined;
    dayId: number;
};

export default function MealsTab(props: Props) {
    const [isLargerThan420] = useMediaQuery('(min-width: 420px)');
    const { mutate: deleteMeal } = useDelete();

    return (
        <Tabs
            orientation={isLargerThan420 ? 'vertical' : 'horizontal'}
            variant="mealVariant"
        >
            <TabList>
                <Flex direction={['row', 'column']} wrap={['wrap', 'nowrap']}>
                    <Tab>Nova Refeição</Tab>
                    {props.meals &&
                        props.meals.map((meal, index) => (
                            <Tab key={index} sx={{ position: 'relative' }}>
                                <Box textAlign="left">
                                    {meal.mealName ? meal.mealName : 'Sem nome'}
                                    <Box as="p" textStyle="p">
                                        {meal.mealDescription
                                            ? meal.mealDescription
                                            : null}
                                    </Box>
                                </Box>
                                <Button
                                    sx={{
                                        position: 'absolute',
                                        top: '8px',
                                        right: '8px',
                                    }}
                                    size="xs"
                                    borderRadius={12}
                                    onClick={() =>
                                        deleteMeal({
                                            type: 'meal',
                                            id: meal.mealId,
                                        })
                                    }
                                >
                                    x
                                </Button>
                            </Tab>
                        ))}
                </Flex>
            </TabList>
            <TabPanels m={[0, 4, 6, 8]}>
                <TabPanel>
                    <Box
                        color="#3db9a2"
                        fontSize={['20px', '20px', '35px', '50px']}
                        fontWeight="700"
                        textAlign="center"
                    >
                        Nova Refeição
                    </Box>
                    <MealForm countedDayId={props.dayId} />
                </TabPanel>
                {props.meals &&
                    props.meals.map((meal, index) => (
                        <TabPanel key={index}>
                            <MealDash {...meal} />
                        </TabPanel>
                    ))}
            </TabPanels>
        </Tabs>
    );
}
