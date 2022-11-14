import { extendTheme, defineStyleConfig } from '@chakra-ui/react';
import { tabsTheme } from './tabsTheme';

const Button = defineStyleConfig({
    baseStyle: {
        fontWeight: 'bold',
        borderRadius: 4,
    },

    sizes: {
        sm: {
            fontSize: 'sm',
            px: 4, // <-- px is short for paddingLeft and paddingRight
            py: 3, // <-- py is short for paddingTop and paddingBottom
        },
        md: {
            fontSize: 'md',
            px: 6, // <-- these values are tokens from the design system
            py: 4, // <-- these values are tokens from the design system
        },
    },

    variants: {
        solid: {
            bg: '#3db9a2',
            color: 'white',
        },
    },

    defaultProps: {
        size: 'md',
        variant: 'solid',
    },
});

const Input = defineStyleConfig({
    baseStyle: {
        borderRadius: 4,
    },

    sizes: {
        sm: {
            fontSize: 'sm',
            px: 4, // <-- px is short for paddingLeft and paddingRight
            py: 3, // <-- py is short for paddingTop and paddingBottom
        },
        md: {
            fontSize: 'md',
            px: 6, // <-- these values are tokens from the design system
            py: 4, // <-- these values are tokens from the design system
        },
    },

    variants: {
        outline: {
            bg: 'white',
            color: '#3db9a2',
        },
    },

    defaultProps: {
        size: 'md',
        variant: 'outline',
    },
});

const customTheme = {
    components: {
        Button,
        Input,
        Tabs: tabsTheme,
    },
    config: {},
    styles: {},
    textStyles: {
        h1: {
            fontSize: '42px',
            color: '#3db9a2',
        },
        h2: {
            fontSize: ['30px', '34px'],
            color: '#3db9a2',
        },
        h3: {
            fontSize: '29px',
            color: '#3db9a2',
        },
        h4: {
            fontSize: '26px',
            color: '#3db9a2',
        },
        h5: {
            fontSize: '20px',
            color: '#3db9a2',
        },
        p: {
            fontSize: '16px',
            color: '#3db9a2',
        },
    },
    layerStyles: {
        card: {
            p: 8,
            borderWidth: 1,
            borderRadius: 4,
            boxShadow: 'lg',
        },
        credentialsCard: {
            p: 8,
            borderWidth: 1,
            borderRadius: 4,
            boxShadow: 'lg',
            width: ['274px', '360px'],
        },
        tabBox: {
            p: 0,
            borderRadius: 4,
            borderWidth: 3,
            borderColor: '#3db9a2',
        },
        nutrient: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 2,
            borderRadius: 4,
            boxShadow: 'lg',
            fontWeight: '900',
            color: 'white',
        },
        fracNumerator: {
            float: 'left',
        },
        fracDenominator: {
            borderTop: 'solid',
            clear: 'left',
            float: 'left',
        },
        searchResultContainer: {
            p: 8,
            borderWidth: 1,
            borderRadius: 8,
            boxShadow: 'lg',
            overflow: 'auto',
        },
        searchResultCard: {
            p: 2,
            borderWidth: 1,
            borderRadius: 8,
            boxShadow: 'lg',
        },
        navBar: {
            bg: '#3db9a2',
            height: '84px',
            padding: '0px 40px',
            boxShadow: 'lg',
        },
    },
    fonts: {
        heading: `'Montserrat', sans-serif`,
        body: `'Montserrat', sans-serif`,
    },
    breakpoints: {
        sm: '420px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1536px',
    },
};

const theme = extendTheme(customTheme);

export default theme;
