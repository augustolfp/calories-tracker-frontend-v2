import MealDash from './MealDash';
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Box,
    Button,
} from '@chakra-ui/react';
import MealForm from '../../../components/MealForm';
import { DayMeal } from '../../../types';
import { useDelete } from '../../../hooks/useDelete';

type Props = {
    meals: DayMeal[] | undefined;
    dayId: number;
};

export default function MealsTab(props: Props) {
    const { mutate: deleteMeal } = useDelete();

    return (
        <Tabs>
            <TabList>
                {props.meals &&
                    props.meals.map((meal, index) => (
                        <Tab key={index}>
                            {meal.mealName ? meal.mealName : 'Sem nome'}
                            <Button
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

                <Tab>+</Tab>
            </TabList>
            <TabPanels>
                {props.meals &&
                    props.meals.map((meal, index) => (
                        <TabPanel key={index}>
                            <MealDash {...meal} />
                        </TabPanel>
                    ))}

                <TabPanel>
                    <MealForm countedDayId={props.dayId} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
