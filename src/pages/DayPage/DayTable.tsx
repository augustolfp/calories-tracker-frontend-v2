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
import { Day } from '../../hooks/useData';

export default function DayTable(props: Day) {
    return (
        <TableContainer width="500px" layerStyle="card" pt={0} mt={8}>
            <Table colorScheme="purple" size="md" variant="striped">
                <TableCaption fontSize="18px" fontWeight="bold" placement="top">
                    Resumo do dia
                </TableCaption>
                <Thead>
                    <Tr>
                        <Th>Nutriente</Th>
                        <Th isNumeric>Consumido</Th>
                        <Th isNumeric>Alvo</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Carboidratos</Td>
                        <Td isNumeric>{props.carbs} g</Td>
                        <Td isNumeric>NA</Td>
                    </Tr>
                    <Tr>
                        <Td>Proteinas</Td>
                        <Td isNumeric>{props.proteins} g</Td>
                        <Td isNumeric>{props.proteinsTarget} g</Td>
                    </Tr>
                    <Tr>
                        <Td>Gorduras</Td>
                        <Td isNumeric>{props.fats} g</Td>
                        <Td isNumeric>NA</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th fontSize="14px">Calorias (kcal)</Th>
                        <Th isNumeric fontSize="14px">
                            {props.kcals}
                        </Th>
                        <Th isNumeric fontSize="14px">
                            {props.caloriesTarget}
                        </Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    );
}
