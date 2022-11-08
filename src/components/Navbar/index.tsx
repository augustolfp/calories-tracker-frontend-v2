import { useAuth } from '../../hooks/useAuth';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import ToggleThemeBtn from './ToggleThemeBtn';

export default function NavBar() {
    const { isLoggedIn, userName } = useAuth();
    const navBackground = useColorModeValue('purple.100', 'purple.700');

    return (
        <Flex
            as="nav"
            bg={navBackground}
            boxShadow={useColorModeValue('sm', 'sm-dark')}
            padding="6px"
        >
            <Box>{userName ? userName : null}</Box>
            <ToggleThemeBtn />
        </Flex>
    );
}
