import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(tabsAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
    tab: {
        fontWeight: 'semibold',
    },
    tabpanel: {},
    tablist: {},
    tabpanels: {},
});

const sizes = {};

const mealVariant = definePartsStyle({
    tab: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: '#f0f0f0',
        color: '#3db9a2',
        _selected: {
            bg: 'white',
            borderColor: '#3db9a2',
        },
    },
    tablist: {
        borderBottom: '2x solid',
        borderColor: 'inherit',
    },
    tabpanel: {
        border: '2px solid',
        borderColor: 'inherit',
        borderBottomRadius: 'lg',
        borderTopRightRadius: 'lg',
    },
});

const variants = {
    mealVariant: mealVariant,
};

// export the component theme
export const tabsTheme = defineMultiStyleConfig({
    baseStyle,
    sizes,
    variants,
});
