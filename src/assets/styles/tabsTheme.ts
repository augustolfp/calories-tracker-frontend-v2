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
        border: 'none',
        bg: '#f0f0f0',
        color: '#3db9a2',
        _selected: {
            bg: 'white',
            borderStyle: 'solid none solid none',
            borderWidth: '3px 0 3px 0',
            borderColor: '#3db9a2',
        },
    },
    tablist: {
        borderStyle: 'none solid none none',
        borderWidth: '0 3px 0 0',
        borderColor: '#3db9a2',
        bg: '#f0f0f0',
    },
    tabpanel: {
        border: 'none',
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
