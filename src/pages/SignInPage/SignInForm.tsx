import {
    Input,
    Button,
    FormControl,
    FormLabel,
    CircularProgress,
    Box,
    Flex,
    Heading,
} from '@chakra-ui/react';

type Props = {
    email: string;
    setEmail: any;
    password: string;
    setPassword: any;
    loading: boolean;
    handleLogin: any;
    setErrMsg: any;
};

export default function SignInForm(props: Props) {
    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box p={2}>
                <Box textAlign="center">
                    <Heading>Login</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form onSubmit={props.handleLogin}>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input
                                variant="filled"
                                mb={3}
                                type="email"
                                name="email"
                                focusBorderColor="purple.400"
                                value={props.email}
                                onChange={(e) => {
                                    props.setEmail(e.target.value);
                                    props.setErrMsg('');
                                }}
                                placeholder="email"
                                disabled={props.loading}
                                required
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Senha</FormLabel>
                            <Input
                                variant="filled"
                                mb={3}
                                type="password"
                                name="password"
                                focusBorderColor="purple.400"
                                value={props.password}
                                onChange={(e) => {
                                    props.setPassword(e.target.value);
                                    props.setErrMsg('');
                                }}
                                placeholder="senha"
                                disabled={props.loading}
                                required
                            />
                        </FormControl>
                        <Button
                            variant="solid"
                            colorScheme="purple"
                            width="full"
                            mb={6}
                            type="submit"
                            disabled={props.loading}
                        >
                            {props.loading ? (
                                <CircularProgress
                                    isIndeterminate
                                    size={8}
                                    color="purple"
                                />
                            ) : (
                                'Entrar'
                            )}
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    );
}
