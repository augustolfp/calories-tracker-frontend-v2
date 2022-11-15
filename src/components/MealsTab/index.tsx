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
    useMediaQuery,
} from '@chakra-ui/react';
import MealForm from '../MealForm';
import MealTab from './MealTab';
import { DayMeal } from '../../types';

type Props = {
    meals: DayMeal[] | undefined;
    dayId: number;
};

export default function MealsTab(props: Props) {
    const [isLargerThan420] = useMediaQuery('(min-width: 420px)');

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
                            <MealTab meal={meal} />
                        ))}
                </Flex>
            </TabList>
            <TabPanels m={[0, 4, 6, 8]}>
                <TabPanel>
                    <Box layerStyle="tabContentTitle">Nova Refeição</Box>
                    <MealForm countedDayId={props.dayId} />
                </TabPanel>
                {props.meals &&
                    props.meals.map((meal, index) => (
                        <TabPanel key={index}>
                            <Box layerStyle="tabContentTitle">
                                {meal.mealName}
                            </Box>
                            <MealDash {...meal} />
                        </TabPanel>
                    ))}
            </TabPanels>
        </Tabs>
    );
}
