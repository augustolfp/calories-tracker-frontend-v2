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
    root: {},
    tab: {
        flexDirection: 'column',
        position: 'relative',
        w: ['50%', '50%', '250px', '300px'],
        h: ['60px', '80px', '100px', '110px'],
        color: 'pageGreen.500',
        bg: '#f0f0f0',
        _selected: {
            bg: 'white',
            borderStyle: 'solid',
            borderWidth: '3px',
            borderColor: 'pageGreen.500',
        },
    },
    tablist: {},
    tabpanels: {},
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
        borderBottom: 'solid 3px #3db9a2',
        w: ['50%', '50%', '33%'],
        m: '0',
        color: 'pageGreen.500',
        _selected: {
            fontWeight: '900',
            borderBottom: 'solid 6px #3db9a2',
        },
    },
    tablist: {},
    tabpanels: {},
    tabpanel: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
