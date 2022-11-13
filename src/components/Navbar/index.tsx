import { useAuth } from '../../hooks/useAuth';
import { Box, Flex, Image } from '@chakra-ui/react';
import titleIcon from '../../../public/titleIcon.svg';

export default function NavBar() {
    const { isLoggedIn, userName } = useAuth();

    return (
        <Flex as="nav" layerStyle="navBar">
            <Image src={titleIcon} w="160px" />
        </Flex>
    );
}
