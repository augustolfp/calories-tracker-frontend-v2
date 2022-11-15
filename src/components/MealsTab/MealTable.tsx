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
import { DayMeal } from '../../types';

export default function MealTable(props: DayMeal) {
    return (
        <TableContainer>
            <Table>
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
                        <Th>Calorias (kcal)</Th>
                        <Th isNumeric>{props.kcals}</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    );
}
