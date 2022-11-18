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
        w: 'full',
    },
    tab: {
        flexDirection: 'column',
        position: 'relative',
        w: ['154px', '200px', '250px', '300px'],
        h: ['60px', '80px', '100px', '110px'],
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

const ingredientVariant = definePartsStyle({
    root: {
        w: 'full',
    },
    tabs: {
        size: 'sm',
    },
    tab: {
        w: ['140px', '50%', '33%'],
        m: '0',
        color: 'pageGreen.500',
        fontWeight: '400',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        _selected: {
            fontWeight: '900',
        },
    },
    tablist: {},
    tabpanel: {
        position: 'relative',
    },
});

const variants = {
    mealVariant,
    ingredientVariant,
};

// export the component theme
export const Tabs = defineMultiStyleConfig({
    baseStyle,
    sizes,
    variants,
});
