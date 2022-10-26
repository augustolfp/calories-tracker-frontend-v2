import { Accordion, Box } from '@chakra-ui/react';
import MealDash from './MealDash';

export default function MealAccordion(props: any) {
    return (
        <Accordion layerStyle="card" w="100%">
            {Object.keys(props).map((key) => {
                const meal = props[key];
                return <MealDash key={key} {...meal} />;
            })}
        </Accordion>
    );
}
