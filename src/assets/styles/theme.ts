import { extendTheme } from '@chakra-ui/react';

const customTheme = {
    config: {},
    styles: {},
    textStyles: {
        h1: {
            fontSize: ['20px', '42px'],
            fontWeight: '900',
            lineHeight: '30px',
        },
        h2: {
            fontSize: ['12px', '16px'],
            fontWeight: '400',
        },
        h3: {
            fontSize: '28px',
            fontWeight: 'bold',
        },
        h4: {
            fontSize: '20px',
            fontWeight: 'bold',
        },
        h5: {
            fontSize: '12px',
            fontWeight: 'bold',
        },
        logoText: {
            mt: '10px',
            fontSize: ['40px', '42px'],
            fontWeight: '900',
            lineHeight: '30px',
        },
        logoSubText: {
            fontSize: ['15px', '16px'],
            fontWeight: '700',
        },
    },
    layerStyles: {
        card: {
            p: 8,
            borderWidth: 1,
            borderRadius: 8,
            boxShadow: 'lg',
        },
        nutrient: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 2,
            borderRadius: 8,
            boxShadow: '2xl',
        },
        nutrientTitle: {
            py: 1,
            px: 4,
            borderRadius: 12,
            fontSize: '12px',
            fontWeight: 'bold',
            mb: '4px',
            color: 'white',
        },
        nutrientNumber: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 1,
            px: 1,
            fontSize: '12px',
            fontWeight: 'bold',
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
    fonts: {},
};

const theme = extendTheme(customTheme);

export default theme;
