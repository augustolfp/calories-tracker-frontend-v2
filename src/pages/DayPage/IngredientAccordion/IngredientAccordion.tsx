import { Accordion } from '@chakra-ui/react';
import IngredientDash from './IngredientDash';

export default function IngredientAccordion(props: any) {
    return (
        <Accordion allowMultiple w="100%">
            {Object.keys(props).map((key) => {
                const meal = props[key];
                return <IngredientDash key={key} {...meal} />;
            })}
        </Accordion>
    );
}
