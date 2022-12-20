import { numberInputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(numberInputAnatomy.keys);

const baseStyle = definePartsStyle({
    root: {
        display: 'flex',
        borderStyle: 'solid none none none',
        borderColor: 'white',
        borderWidth: '2px',
    },
    field: {
        w: '50%',
        textAlign: 'center',
        fontWeight: '700',
        color: 'white',
        bg: 'transparent',
    },
    stepperGroup: {
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        w: '50%',
    },
    stepper: {
        borderStyle: 'none none none solid',
        borderColor: 'white',
        borderWidth: '2px',
    },
});

const xl = defineStyle({
    fontSize: 'lg',
    h: '20',
    px: '2',
});

const sizes = {
    xl: definePartsStyle({ field: xl, stepper: xl, addon: xl }),
};

const ingredientVariant = definePartsStyle({});

const searchTableVariant = definePartsStyle({});

const variants = {
    ingredientVariant,
    searchTableVariant,
};

export const NumberInput = defineMultiStyleConfig({
    baseStyle,
    sizes,
    variants,
});
