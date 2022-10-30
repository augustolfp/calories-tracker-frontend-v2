import MealDash from './MealDash';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';

export default function MealList(props: any) {
    return (
        <Tabs>
            <TabList>
                {Object.keys(props).map((key) => (
                    <Tab key={key}>{props[key].mealName}</Tab>
                ))}
            </TabList>
            <TabPanels>
                {Object.keys(props).map((key) => (
                    <TabPanel key={key}>
                        <MealDash {...props[key]} />
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    );
}
