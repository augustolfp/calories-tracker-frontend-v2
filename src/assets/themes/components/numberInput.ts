import { numberInputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(numberInputAnatomy.keys);

const baseStyle = definePartsStyle({
    root: {
        borderRadius: 4,
        w: 'full',
    },
    field: {
        fontWeight: '700',
        color: 'white',
        bg: 'transparent',
    },
    stepperGroup: {
        color: 'white',
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

const ingredientVariant = definePartsStyle({
    root: {
        h: '60px',
        layerStyle: 'colorfulCard',
    },
    field: {
        mb: '-20px',
        textAlign: 'center',
        bg: 'transparent',
    },
    stepperGroup: {
        h: '60px',
    },
    stepper: {},
});

const searchTableVariant = definePartsStyle({
    root: {},
    field: { marginLeft: '15%' },
    stepperGroup: {
        display: 'flex',
        flexDirection: 'row',
        w: '50%',
    },
    stepper: {
        borderStyle: 'none none none solid',
    },
});

const variants = {
    ingredientVariant,
    searchTableVariant,
};

export const NumberInput = defineMultiStyleConfig({
    baseStyle,
    sizes,
    variants,
});
