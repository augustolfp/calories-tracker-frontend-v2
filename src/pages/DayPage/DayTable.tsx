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
import FormatDate from '../../components/FormatDate';

export default function DayTable(props: Day) {
    return (
        <TableContainer width="500px" layerStyle="card">
            <Table colorScheme="purple" size="md" variant="striped">
                <TableCaption>
                    <FormatDate day={props.day} />
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
                        <Th>Calorias</Th>
                        <Th isNumeric>{props.kcals} kCal</Th>
                        <Th isNumeric>{props.caloriesTarget} kCal</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    );
}
