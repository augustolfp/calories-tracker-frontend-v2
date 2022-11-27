import { useAuth } from '../../hooks/useAuth';
import { Box, Flex, Image, Icon, Button } from '@chakra-ui/react';
import titleIcon from '../../assets/icons/titleIcon.svg';
import { GoMarkGithub } from 'react-icons/go';
import { Link } from 'react-router-dom';

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react';

export default function NavBar() {
    const { isLoggedIn, userName, signOut } = useAuth();

    return (
        <Flex
            as="nav"
            layerStyle="navBar"
            justify="space-between"
            align="center"
        >
            <Link to="/dashboard">
                <Image src={titleIcon} w={['80px', '120px', '160px']} />
            </Link>
            <Flex gap={[2, 4]}>
                <a
                    href="https://github.com/augustolfp/calories-tracker-frontend-v2"
                    target="_blank"
                >
                    <Icon
                        as={GoMarkGithub}
                        color="white"
                        w={[5, 7, 10]}
                        h={[5, 7, 10]}
                    />
                </a>

                {isLoggedIn ? (
                    <Menu>
                        <MenuButton
                            as={Button}
                            w={[5, 7, 10]}
                            h={[5, 7, 10]}
                            borderRadius="full"
                            bg="white"
                            fontSize={[10, 15, 20]}
                            fontWeight="600"
                            color="pageGreen.500"
                        >
                            {userName[0]}
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => signOut()}>Sair</MenuItem>
                        </MenuList>
                    </Menu>
                ) : null}
            </Flex>
        </Flex>
    );
}
