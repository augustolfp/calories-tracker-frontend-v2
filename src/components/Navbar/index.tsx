import { useAuth } from '../../hooks/useAuth';
import { Box, Flex, Image, Icon } from '@chakra-ui/react';
import titleIcon from '../../../public/titleIcon.svg';
import { GoMarkGithub } from 'react-icons/go';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const { isLoggedIn, userName } = useAuth();

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
                    <Flex
                        justify="center"
                        align="center"
                        w={[5, 7, 10]}
                        h={[5, 7, 10]}
                        borderRadius="full"
                        bg="white"
                        fontSize={[10, 15, 20]}
                        fontWeight="600"
                        color="pageGreen.500"
                    >
                        {userName[0]}
                    </Flex>
                ) : null}
            </Flex>
        </Flex>
    );
}
