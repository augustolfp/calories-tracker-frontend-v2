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
    root: {
        m: '-3px',
    },
    tab: {
        flexDirection: 'column',
        position: 'relative',
        w: ['154px', '200px', '250px', '400px'],
        h: ['60px', '80px', '100px', '150px'],
        m: '0',
        borderStyle: 'none',
        bg: '#f0f0f0',
        color: '#3db9a2',
        _selected: {
            bg: 'white',
            m: ['0', '0'],
            borderStyle: 'solid',
            borderWidth: '3px',
            borderColor: '#3db9a2',
        },
    },
    tablist: {
        borderStyle: 'none',
        bg: '#f0f0f0',
    },
    tabpanel: {},
});

const variants = {
    mealVariant: mealVariant,
};

// export the component theme
export const Tabs = defineMultiStyleConfig({
    baseStyle,
    sizes,
    variants,
});
