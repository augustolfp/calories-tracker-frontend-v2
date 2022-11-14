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
        mr: '-3px',
        borderStyle: 'none solid none none',
        borderWidth: '0 3px 0 0',
        borderColor: 'transparent #3db9a2 transparent transparent',
        bg: '#f0f0f0',
        color: '#3db9a2',
        _selected: {
            bg: 'white',
            mt: '-3px',
            mr: '-4px',
            borderStyle: 'solid solid solid none',
            borderWidth: '3px 4px 3px 0',
            borderColor: '#3db9a2 white #3db9a2 transparent',
        },
    },
    tablist: {
        borderStyle: 'none',
        bg: '#f0f0f0',
    },
    tabpanel: {
        borderStyle: 'none none none solid',
        borderWidth: '0 0 0 3px',
        borderColor: '#3db9a2',
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
