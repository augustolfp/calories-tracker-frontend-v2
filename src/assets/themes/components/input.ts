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

const ingredientVariant = definePartsStyle({
    field: {
        color: 'white',
        bg: 'transparent',
        _placeholder: {
            color: 'white',
        },
        mb: '10px',
        fontWeight: '700',
    },
    addon: {},
});

const variants = {
    credentialsVariant,
    ingredientVariant,
};

export const Input = defineMultiStyleConfig({
    baseStyle,
    sizes,
    variants,
});
