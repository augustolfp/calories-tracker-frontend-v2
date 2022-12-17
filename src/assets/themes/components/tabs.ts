import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(tabsAnatomy.keys);

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
    tablist: {
        display: 'flex',
        flexDirection: ['row', 'row', 'column'],
        flexWrap: ['wrap-reverse', 'wrap-reverse', 'nowrap'],
    },
    tabpanels: {
        pt: ['8px', '12px', '6px'],
    },
    tabpanel: {
        p: ['0px', null, '0px 8px'],
    },
});

const ingredientVariant = definePartsStyle({
    root: {},
    tabs: {},
    tab: {
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
