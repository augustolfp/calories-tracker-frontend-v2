import {
    Input,
    Button,
    FormControl,
    FormLabel,
    CircularProgress,
    Box,
    VStack,
} from '@chakra-ui/react';
import RedirectButton from './RedirectButton';

type Props = {
    email: string;
    setEmail: any;
    password: string;
    setPassword: any;
    loading: boolean;
    handleLogin: any;
    setErrMsg: any;
    isLoggedIn: boolean;
    children?: JSX.Element | JSX.Element[];
};

import { Link } from 'react-router-dom';

export default function SignInForm(props: Props) {
    return (
        <Box layerStyle="credentialsCard">
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
                <RedirectButton
                    url="/dashboard"
                    text="Ir para minha dashboard"
                />
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
                                        props.setErrMsg('');
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
                                <Input
                                    type="password"
                                    name="password"
                                    focusBorderColor="#3db9a2"
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
        </Box>
    );
}
