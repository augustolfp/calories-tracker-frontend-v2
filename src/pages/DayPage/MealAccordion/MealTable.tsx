import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';
import { DayMeal } from '../../../hooks/useData';

export default function MealTable(props: DayMeal) {
    return (
        <TableContainer pt={0}>
            <Table colorScheme="purple" size="sm" variant="striped">
                <TableCaption fontSize="18px" fontWeight="bold" placement="top">
                    {props.mealName}
                </TableCaption>
                <Thead>
                    <Tr>
                        <Th>Nutriente</Th>
                        <Th isNumeric>Consumido</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Carboidratos</Td>
                        <Td isNumeric>{props.carbs} g</Td>
                    </Tr>
                    <Tr>
                        <Td>Proteinas</Td>
                        <Td isNumeric>{props.proteins} g</Td>
                    </Tr>
                    <Tr>
                        <Td>Gorduras</Td>
                        <Td isNumeric>{props.fats} g</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th fontSize="14px">Calorias (kcal)</Th>
                        <Th isNumeric fontSize="14px">
                            {props.kcals}
                        </Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    );
}
