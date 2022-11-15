import { defineStyleConfig } from '@chakra-ui/react';

export const Input = defineStyleConfig({
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
