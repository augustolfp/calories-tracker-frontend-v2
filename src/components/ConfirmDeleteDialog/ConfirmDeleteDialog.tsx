import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    Box,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useDelete } from '../../hooks/useDelete';

type Props = {
    type: 'day' | 'meal' | 'ingredient';
    id: number;
    children: any;
};

export default function ConfirmDeleteDialog(props: Props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef(null);
    const { mutate: deleteDay } = useDelete();
    return (
        <>
            <Box role="button" layerStyle="deleteIconBox" onClick={onOpen}>
                {props.children}
            </Box>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isCentered={true}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Deletar registro
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Tem certeza que deseja apagar?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancelar
                            </Button>
                            <Button
                                colorScheme="red"
                                onClick={() => {
                                    deleteDay({
                                        type: props.type,
                                        id: props.id,
                                    });
                                    onClose();
                                }}
                                ml={3}
                            >
                                Apagar
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}
