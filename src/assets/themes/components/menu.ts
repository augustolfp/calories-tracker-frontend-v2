import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({});

const signOutVariant = definePartsStyle({
    button: {},
    list: {
        py: '4',
        borderRadius: '4px',
        border: 'none',
        boxShadow: 'lg',
    },
    item: {
        color: 'pageGreen.500',
        fontWeight: '600',
        _hover: {
            border: 'solid 2px pageGreen.500',
        },
        _focus: {
            borderStyle: 'solid 1px pageGreen.500',
        },
    },
});

const variants = {
    signOutVariant,
};

export const Menu = defineMultiStyleConfig({ baseStyle, variants });
