import { extendTheme, defineStyleConfig } from '@chakra-ui/react';
import { Tabs } from './components/tabs';
import { Button } from './components/button';
import { Input } from './components/input';
import { textStyles } from './foundations/textStyles';
import { layerStyles } from './foundations/layerStyles';
import { fonts } from './foundations/fonts';
import { breakpoints } from './foundations/breakpoints';
import { styles } from './styles';
import { colors } from './foundations/colors';

const customTheme = {
    components: {
        Button,
        Input,
        Tabs,
    },
    config: {},
    styles,
    textStyles,
    layerStyles,
    fonts,
    breakpoints,
    colors,
};

const theme = extendTheme(customTheme);

export default theme;
