import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import ToggleThemeBtn from './ToggleThemeBtn';

export default function NavBar() {
    const navBackground = useColorModeValue('purple.100', 'purple.700');

    return (
        <Box
            as="nav"
            bg={navBackground}
            boxShadow={useColorModeValue('sm', 'sm-dark')}
            padding="6px"
        >
            <ToggleThemeBtn />
        </Box>
    );
}
