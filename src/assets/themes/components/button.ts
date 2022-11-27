import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
    baseStyle: {
        fontWeight: 'bold',
        borderRadius: 4,
    },

    sizes: {
        xs: {
            fontSize: 'xs',
            p: 1,
            borderRadius: '100%',
        },
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
        deleteMeal: {
            bg: 'transparent',
            color: 'pageGreen.500',
            top: '50%',
            right: '4px',
        },
    },

    defaultProps: {
        size: 'md',
        variant: 'solid',
    },
});
