import bananaIcon from '../../../public/icon.svg';
import { Flex, Image, Container } from '@chakra-ui/react';

type Props = {
    children: any;
};

export default function CredentialsPageLayout(props: Props) {
    return (
        <Container maxW="container.xl">
            <Flex
                height="100vh"
                py={20}
                direction={['column', 'row']}
                alignItems="center"
                justifyContent="center"
            >
                <Image
                    boxSize={[116, 400]}
                    src={bananaIcon}
                    alt="banana logo"
                />
                {props.children}
            </Flex>
        </Container>
    );
}
