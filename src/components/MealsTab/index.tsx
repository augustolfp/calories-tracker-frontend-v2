import MealDash from './MealDash';
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Box,
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
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    return (
        <Tabs
            orientation={isLargerThan768 ? 'vertical' : 'horizontal'}
            variant="mealVariant"
        >
            <TabList>
                <Tab>
                    <Box layerStyle="mealTabSummaryTitle">Nova Refeição</Box>
                </Tab>
                {props.meals &&
                    props.meals.map((meal, index) => (
                        <MealTab meal={meal} key={index} />
                    ))}
            </TabList>
            <TabPanels>
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
                            <Box layerStyle="tabContentSubTitle">
                                Resumo da refeição
                            </Box>
                            <MealDash {...meal} />
                        </TabPanel>
                    ))}
            </TabPanels>
        </Tabs>
    );
}
