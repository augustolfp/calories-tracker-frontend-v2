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
import { useMediaQuery } from '@chakra-ui/react';

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
                            <Tab key={index}>
                                {meal.mealName ? meal.mealName : 'Sem nome'}
                                <Button
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
            <TabPanels>
                <TabPanel>
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
