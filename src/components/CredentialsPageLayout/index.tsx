import bananaIcon from '../../assets/icons/icon.svg';
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
                <Image
                    boxSize={['70%', '70%', '70%']}
                    src={bananaIcon}
                    alt="banana logo"
                />
                {props.children}
            </Flex>
        </Container>
    );
}
