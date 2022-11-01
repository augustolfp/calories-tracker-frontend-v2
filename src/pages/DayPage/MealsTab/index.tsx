import MealDash from './MealDash';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import MealForm from '../../../components/MealForm';
import { DayMeal } from '../../../hooks/useData';

type Props = {
    meals: DayMeal[];
    dayId: number;
};

export default function MealsTab(props: Props) {
    return (
        <Tabs>
            <TabList>
                {props.meals[0] && (
                    <>
                        {props.meals.map((meal, index) => (
                            <Tab key={index}>
                                {meal.mealName ? meal.mealName : 'Sem nome'}
                            </Tab>
                        ))}
                    </>
                )}
                <Tab>+</Tab>
            </TabList>
            <TabPanels>
                {props.meals[0] && (
                    <>
                        {props.meals.map((meal, index) => (
                            <TabPanel key={index}>
                                <MealDash {...meal} />
                            </TabPanel>
                        ))}
                    </>
                )}
                <TabPanel>
                    <MealForm countedDayId={props.dayId} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
