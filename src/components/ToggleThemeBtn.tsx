import { Button } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function ToggleThemeBtn() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button onClick={() => toggleColorMode()}>
            {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
}
