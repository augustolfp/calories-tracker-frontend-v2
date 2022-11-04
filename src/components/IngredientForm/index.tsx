import {
    Input,
    Button,
    FormControl,
    FormLabel,
    CircularProgress,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useIngredientCreator } from '../../hooks/useIngredientCreator';
import SearchIngredients from '../SearchIngredients';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react';

type Props = {
    mealId: number;
};

export default function IngredientForm(props: Props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        mutate: addIngredient,
        isLoading,
        isError,
        error,
    } = useIngredientCreator();
    const [name, setName] = useState('');
    const [weight, setWeight] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [fats, setFats] = useState(0);
    const [proteins, setProteins] = useState(0);
    const [kcals, setKcals] = useState(0);

    async function handleIngredientCreation(e: any) {
        e.preventDefault();
        const body = {
            name,
            mealId: props.mealId,
            weightInGrams: weight,
            carbsInGrams: carbs,
            fatsInGrams: fats,
            proteinsInGrams: proteins,
            kcals,
        };
        addIngredient(body);
    }

    return (
        <>
            <form onSubmit={handleIngredientCreation}>
                <FormControl isRequired>
                    <FormLabel>Ingrediente</FormLabel>
                    <Input
                        type="text"
                        name="ingName"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        placeholder="Nome do ingrediente"
                        disabled={isLoading}
                        required
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Quantidade, em gramas</FormLabel>
                    <Input
                        type="number"
                        name="weight"
                        value={weight}
                        onChange={(e) => {
                            setWeight(Number(e.target.value));
                        }}
                        placeholder="Peso (g)"
                        disabled={isLoading}
                        required
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Carboidratos, em gramas</FormLabel>
                    <Input
                        type="number"
                        name="carbs"
                        value={carbs}
                        onChange={(e) => {
                            setCarbs(Number(e.target.value));
                        }}
                        placeholder="Carboidratos (g)"
                        disabled={isLoading}
                        required
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Gorduras, em gramas</FormLabel>
                    <Input
                        type="number"
                        name="fats"
                        value={fats}
                        onChange={(e) => {
                            setFats(Number(e.target.value));
                        }}
                        placeholder="Gorduras (g)"
                        disabled={isLoading}
                        required
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Proteinas, em gramas</FormLabel>
                    <Input
                        type="number"
                        name="proteins"
                        value={proteins}
                        onChange={(e) => {
                            setProteins(Number(e.target.value));
                        }}
                        placeholder="Proteinas (g)"
                        disabled={isLoading}
                        required
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Total de Calorias</FormLabel>
                    <Input
                        type="number"
                        name="kcals"
                        value={kcals}
                        onChange={(e) => {
                            setKcals(Number(e.target.value));
                        }}
                        placeholder="kCals"
                        disabled={isLoading}
                        required
                    />
                </FormControl>
                <Button
                    variant="solid"
                    colorScheme="purple"
                    width="full"
                    mb={6}
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <CircularProgress
                            isIndeterminate
                            size={8}
                            color="purple"
                        />
                    ) : (
                        'Adicionar'
                    )}
                </Button>
            </form>
            <Button onClick={onOpen}>Pesquisar</Button>
            <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Pesquise ingredientes</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <SearchIngredients />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="purple" mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
