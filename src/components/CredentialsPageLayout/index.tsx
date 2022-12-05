/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as BananaIcon } from '../../assets/icons/icon.svg';
import { Flex, Image, Container } from '@chakra-ui/react';

type Props = {
    children: any;
};

export default function CredentialsPageLayout(props: Props) {
    return (
        <Container
            maxW="1200px"
            height="100vh"
            centerContent
            justifyContent="center"
        >
            <Flex
                h={[null, null, '500px']}
                w={['100vw', '70vw', '100vw']}
                maxW="920px"
                justify="center"
                align="center"
                p={['8px', '14px']}
                direction={['column', 'column', 'row']}
                gap={6}
            >
                <BananaIcon />
                {props.children}
            </Flex>
        </Container>
    );
}
