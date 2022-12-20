import {
    Input,
    Button,
    FormControl,
    FormLabel,
    CircularProgress,
    Box,
    Flex,
    VStack,
} from '@chakra-ui/react';
import RedirectButton from './RedirectButton';
import PasswordInput from '../../components/PasswordInput/PasswordInput';

type Props = {
    email: string;
    setEmail: any;
    password: string;
    setPassword: any;
    loading: boolean;
    handleLogin: any;
    isLoggedIn: boolean;
};

import { Link } from 'react-router-dom';

export default function SignInForm(props: Props) {
    return (
        <Flex layerStyle="credentialsCard">
            <Box as="h2">Login</Box>
            {props.isLoggedIn ? (
                <>
                    <Box as="h4">Você já está logado!</Box>
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
                                <FormLabel as="h3">Email</FormLabel>
                                <Input
                                    variant="credentialsVariant"
                                    type="email"
                                    name="email"
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
                                <FormLabel as="h3">Senha</FormLabel>
                                <PasswordInput
                                    password={props.password}
                                    setPassword={props.setPassword}
                                    loading={props.loading}
                                />
                            </FormControl>
                            <Button type="submit" disabled={props.loading}>
                                {props.loading ? (
                                    <CircularProgress
                                        isIndeterminate
                                        size="20px"
                                        color="pageGreen.500"
                                    />
                                ) : (
                                    'Entrar'
                                )}
                            </Button>
                        </VStack>
                    </form>
                    <Link to="/sign-up">
                        <Box as="h5">Ainda não tem uma conta? Cadastre-se!</Box>
                    </Link>
                </>
            )}
        </Flex>
    );
}
