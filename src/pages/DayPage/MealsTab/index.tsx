import MealDash from './MealDash';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import MealForm from '../../../components/MealForm';

export default function MealsTab(props: any) {
    return (
        <Tabs>
            <TabList>
                {Object.keys(props).map((key) => (
                    <Tab key={key}>
                        {props[key]?.mealName
                            ? props[key].mealName
                            : 'Sem nome'}
                    </Tab>
                ))}
                <Tab>+</Tab>
            </TabList>
            <TabPanels>
                {Object.keys(props).map((key) => (
                    <TabPanel key={key}>
                        <MealDash {...props[key]} />
                    </TabPanel>
                ))}
                <TabPanel>
                    <MealForm countedDayId={props.dayId} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
