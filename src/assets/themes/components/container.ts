import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = {
    maxW: '100vw',
    minH: '100vh',
    m: '0px',
    p: '0px',
};

const centerVariant = {
    justifyContent: 'center',
};

const variants = {
    centerVariant,
};

export const Container = defineStyleConfig({ baseStyle, variants });
