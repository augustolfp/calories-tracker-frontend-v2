import { Flex, Heading } from '@chakra-ui/react';

type Props = {
    errMsg: string;
    isLoggedIn: boolean;
};

export default function SignInStatus(props: Props) {
    return (
        <>
            {props.errMsg && (
                <Flex
                    bg="tomato"
                    p={2}
                    borderRadius={8}
                    w={60}
                    justify="center"
                >
                    <Heading as="h3" size="md" color="white">
                        {props.errMsg}
                    </Heading>
                </Flex>
            )}
            {props.isLoggedIn && (
                <Flex
                    bg="green.300"
                    p={2}
                    borderRadius={8}
                    w={60}
                    justify="center"
                >
                    <Heading as="h3" size="md" color="white">
                        Você está logado!
                    </Heading>
                </Flex>
            )}
        </>
    );
}
