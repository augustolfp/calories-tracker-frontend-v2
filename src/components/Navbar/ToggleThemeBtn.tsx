import { IconButton } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function ToggleThemeBtn() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <IconButton
            aria-label="Trocar tema"
            variant="ghost"
            colorScheme="purple"
            rounded="100%"
            onClick={() => toggleColorMode()}
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        />
    );
}
