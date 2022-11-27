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
import { NumberInput } from './components/numberInput';
import { Menu } from './components/menu';

const customTheme = {
    components: {
        Button,
        Input,
        Tabs,
        NumberInput,
        Menu,
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
