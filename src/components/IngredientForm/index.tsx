import SearchIngredients from '../SearchIngredients';
import CreateCustomIngredient from '../CreateCustomIngredient';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react';

type Props = {
    mealId: number;
};

export default function IngredientForm(props: Props) {
    const {
        isOpen: isSearchOpen,
        onOpen: onSearchOpen,
        onClose: onSearchClose,
    } = useDisclosure();
    const {
        isOpen: isCreatorOpen,
        onOpen: onCreatorOpen,
        onClose: onCreatorClose,
    } = useDisclosure();

    return (
        <>
            <Button onClick={onSearchOpen}>Pesquisar</Button>
            <Button onClick={onCreatorOpen}>Criar</Button>
            <Modal
                isOpen={isSearchOpen}
                onClose={onSearchClose}
                size="xl"
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Pesquise ingredientes</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <SearchIngredients />
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme="purple"
                            mr={3}
                            onClick={onSearchClose}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Modal
                isOpen={isCreatorOpen}
                onClose={onCreatorClose}
                size="xl"
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crie um ingrediente</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <CreateCustomIngredient mealId={props.mealId} />
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme="purple"
                            mr={3}
                            onClick={onCreatorClose}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
