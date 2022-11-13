import { useAuth } from '../../hooks/useAuth';
import { Box, Flex } from '@chakra-ui/react';

export default function NavBar() {
    const { isLoggedIn, userName } = useAuth();

    return (
        <Flex as="nav" bg={'black'} padding="6px">
            <Box>{userName ? userName : null}</Box>
        </Flex>
    );
}
