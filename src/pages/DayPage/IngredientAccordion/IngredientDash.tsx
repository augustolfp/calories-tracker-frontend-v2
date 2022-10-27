import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import IngredientTable from './IngredientTable';
import { MealIngredient } from '../../../hooks/useData';

export default function IngredientDash(props: MealIngredient) {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                    <Box flex="1" textAlign="left">
                        {props?.name ? props.name : 'Sem nome'}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <IngredientTable {...props} />
            </AccordionPanel>
        </AccordionItem>
    );
}
