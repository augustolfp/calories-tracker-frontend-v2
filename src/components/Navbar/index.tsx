/// <reference types="vite-plugin-svgr/client" />
import { useAuth } from '../../hooks/useAuth';
import {
    Box,
    Flex,
    Image,
    Icon,
    Button,
    Center,
    chakra,
} from '@chakra-ui/react';
import { ReactComponent as TitleIcon } from '../../assets/icons/titleIcon.svg';
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

const ChakraTitleIcon = chakra(TitleIcon);

export default function NavBar() {
    const { isLoggedIn, userName, signOut } = useAuth();

    return (
        <Flex
            as="nav"
            layerStyle="navBar"
            justify="space-between"
            align="center"
            w="full"
            position="absolute"
            top="0"
        >
            <Link to="/dashboard">
                <ChakraTitleIcon w={['80px', '120px', '160px']} />
            </Link>
            <Flex gap={4} align="center">
                <a
                    href="https://github.com/augustolfp/calories-tracker-frontend-v2"
                    target="_blank"
                >
                    <Center>
                        <Icon
                            as={GoMarkGithub}
                            color="white"
                            w={['24px', '32px', '40px']}
                            h={['24px', '32px', '40px']}
                        />
                    </Center>
                </a>

                {isLoggedIn ? (
                    <Menu variant="signOutVariant">
                        <MenuButton
                            as={Button}
                            p="0px"
                            m="0px"
                            minW={0}
                            fontSize={[14, 20, 24]}
                            w={['24px', '32px', '40px']}
                            h={['24px', '32px', '40px']}
                            bg="white"
                            borderRadius="full"
                            fontWeight="600"
                            color="pageGreen.500"
                        >
                            <Center>{userName[0]}</Center>
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
