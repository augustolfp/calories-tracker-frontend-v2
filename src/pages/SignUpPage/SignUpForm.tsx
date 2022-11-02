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
    name: string;
    setName: any;
    email: string;
    setEmail: any;
    password: string;
    setPassword: any;
    loading: boolean;
    handleNewUser: any;
    setErrMsg: any;
    children?: JSX.Element | JSX.Element[];
};

export default function SignUpForm(props: Props) {
    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box maxWidth="500px" layerStyle="card">
                <Box textAlign="center" m={4}>
                    <Box as="h3" textStyle="h3">
                        SignUp
                    </Box>
                </Box>
                <Box my={4} textAlign="left">
                    <form onSubmit={props.handleNewUser}>
                        <FormControl isRequired>
                            <FormLabel>Nome</FormLabel>
                            <Input
                                variant="filled"
                                mb={3}
                                type="text"
                                name="name"
                                focusBorderColor="purple.400"
                                value={props.name}
                                onChange={(e) => {
                                    props.setName(e.target.value);
                                    props.setErrMsg('');
                                }}
                                placeholder="nome"
                                disabled={props.loading}
                                required
                            />
                        </FormControl>
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
                                'Cadastrar'
                            )}
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    );
}
