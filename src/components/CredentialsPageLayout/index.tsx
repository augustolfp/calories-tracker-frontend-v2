import bananaIcon from '../../../public/icon.svg';
import { Flex, Image, Box, Heading } from '@chakra-ui/react';

type Props = {
    children: any;
};

export default function CredentialsPageLayout(props: Props) {
    return (
        <Flex
            height="100vh"
            direction={['column', 'row']}
            alignItems="center"
            justifyContent="center"
        >
            <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Flex
                    direction={['row', 'column']}
                    alignItems="center"
                    justifyContent="center"
                    w={['235px', '200px']}
                >
                    <Image
                        boxSize={[50, 200]}
                        src={bananaIcon}
                        alt="banana logo"
                    />
                    <Flex
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Box as="h1" textStyle="logoText" color="#00d666">
                            DIETINHA
                        </Box>
                        <Box as="h2" textStyle="logoSubText" color="#83e05e">
                            CONTADOR DE CALORIAS
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
            <Flex direction="column" p={12} rounded={6}>
                {props.children}
            </Flex>
        </Flex>
    );
}
