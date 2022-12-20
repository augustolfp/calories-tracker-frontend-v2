import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
    field: {},
});

const sizes = {};

const credentialsVariant = definePartsStyle({
    field: {
        color: 'pageGreen.500',
        borderStyle: 'solid',
        borderWidth: '2px',
        _focus: {
            borderColor: 'pageGreen.500',
        },
    },
    addon: {},
});

const variants = {
    credentialsVariant,
};

export const Input = defineMultiStyleConfig({
    baseStyle,
    sizes,
    variants,
});
