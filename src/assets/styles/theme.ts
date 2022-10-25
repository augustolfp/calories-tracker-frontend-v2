import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const customTheme = {
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: true,
    },
    styles: {
        global: (props: StyleFunctionProps | Record<string, any>) => ({
            body: {
                bg: mode('purple.50', 'purple.800')(props),
                color: mode('purple.600', 'white')(props),
            },
        }),
    },
    textStyles: {
        h1: {
            fontSize: ['20px', '36px'],
            fontStyle: 'italic',
        },
        h2: {
            fontSize: ['12px', '20px'],
        },
        h3: {
            fontSize: '28px',
            fontWeight: 'bold',
        },
    },
};

const theme = extendTheme(customTheme);

export default theme;
