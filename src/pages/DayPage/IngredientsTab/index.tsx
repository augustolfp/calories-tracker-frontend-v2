import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import IngredientDash from './IngredientDash';

export default function IngredientsTab(props: any) {
    return (
        <Tabs orientation="vertical">
            <TabList>
                {Object.keys(props).map((key) => (
                    <Tab key={key}>
                        {props[key]?.name ? props[key].name : 'Sem nome'}
                    </Tab>
                ))}
            </TabList>
            <TabPanels>
                {Object.keys(props).map((key) => (
                    <TabPanel key={key}>
                        <IngredientDash {...props[key]} />
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    );
}
