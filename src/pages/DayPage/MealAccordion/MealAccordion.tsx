import { Accordion, Box } from '@chakra-ui/react';
import AccordionMealItem from './AccordionMealItem';

export default function MealAccordion(props: any) {
    return (
        <Accordion allowMultiple layerStyle="card" w="100%">
            {Object.keys(props).map((key) => {
                const meal = props[key];
                return <AccordionMealItem key={key} {...meal} />;
            })}
        </Accordion>
    );
}
