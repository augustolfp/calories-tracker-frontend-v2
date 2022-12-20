import {
    Input,
    InputGroup,
    InputRightElement,
    Button,
    FormControl,
    FormLabel,
    CircularProgress,
    Box,
    Flex,
    VStack,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import RedirectButton from './RedirectButton';
import { useState } from 'react';

type Props = {
    email: string;
    setEmail: any;
    password: string;
    setPassword: any;
    loading: boolean;
    handleLogin: any;
    isLoggedIn: boolean;
    children?: JSX.Element | JSX.Element[];
};

import { Link } from 'react-router-dom';

export default function SignInForm(props: Props) {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    return (
        <Flex layerStyle="credentialsCard" direction="column" justify="center">
            <Box
                as="h2"
                textStyle="h2"
                textAlign="center"
                m={4}
                fontWeight="600"
            >
                Login
            </Box>
            {props.children}
            {props.isLoggedIn ? (
                <>
                    <Box as="h4" textStyle="h4" textAlign="center">
                        Você já está logado!
                    </Box>
                    <RedirectButton
                        url="/dashboard"
                        text="Ir para minha dashboard"
                    />
                </>
            ) : (
                <>
                    <form onSubmit={props.handleLogin}>
                        <VStack spacing={8}>
                            <FormControl isRequired>
                                <FormLabel as="h3" textStyle="h3">
                                    Email
                                </FormLabel>
                                <Input
                                    type="email"
                                    name="email"
                                    focusBorderColor="#3db9a2"
                                    value={props.email}
                                    onChange={(e) => {
                                        props.setEmail(e.target.value);
                                    }}
                                    placeholder="email"
                                    disabled={props.loading}
                                    required
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel as="h3" textStyle="h3">
                                    Senha
                                </FormLabel>
                                <InputGroup>
                                    <Input
                                        type={show ? 'text' : 'password'}
                                        name="password"
                                        focusBorderColor="#3db9a2"
                                        value={props.password}
                                        onChange={(e) => {
                                            props.setPassword(e.target.value);
                                        }}
                                        placeholder="senha"
                                        disabled={props.loading}
                                        required
                                    />
                                    <InputRightElement>
                                        <Button
                                            variant="unstyled"
                                            onClick={handleClick}
                                        >
                                            {show ? (
                                                <ViewOffIcon
                                                    w="full"
                                                    h="full"
                                                    color="pageGreen.500"
                                                />
                                            ) : (
                                                <ViewIcon
                                                    w="full"
                                                    h="full"
                                                    color="pageGreen.500"
                                                />
                                            )}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Button
                                type="submit"
                                w="full"
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
                        </VStack>
                    </form>
                    <Link to="/sign-up">
                        <Box
                            textStyle="h3"
                            fontSize="sm"
                            textAlign="center"
                            mt={4}
                        >
                            Ainda não tem uma conta? Cadastre-se!
                        </Box>
                    </Link>
                </>
            )}
        </Flex>
    );
}
