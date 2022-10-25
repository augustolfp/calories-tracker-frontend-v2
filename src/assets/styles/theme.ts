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
};

const theme = extendTheme(customTheme);

export default theme;
