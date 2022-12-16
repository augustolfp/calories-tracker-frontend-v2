import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = {
    maxW: '100vw',
    minH: '100vh',
    m: '0px',
    pt: ['42px', '64px', '84px'],
    pr: '0px',
    pb: '0px',
    pl: '0px',
};

const centerVariant = {
    justifyContent: 'center',
};

const variants = {
    centerVariant,
};

export const Container = defineStyleConfig({ baseStyle, variants });
