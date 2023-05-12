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
import qs from 'query-string';

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
    const client_id = import.meta.env.VITE_CLIENT_ID;
    const redirect_uri = import.meta.env.VITE_REDIRECT_URI;
    const github_auth_url = import.meta.env.VITE_GITHUB_AUTH_URL;

    function githubLogin() {
        const params = {
            response_type: 'code',
            scope: 'user',
            client_id: client_id,
            redirect_uri: redirect_uri,
            state: 'test-Augusto',
        };

        const queryStrings = qs.stringify(params);
        const authorizationURL = `${github_auth_url}?${queryStrings}`;
        window.location.href = authorizationURL;
    }

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
                    <Button onClick={githubLogin} my={2}>
                        Faça login com o Github
                    </Button>
                    <Link to="/sign-up">
                        <Box as="h5">Ainda não tem uma conta? Cadastre-se!</Box>
                    </Link>
                </>
            )}
        </Flex>
    );
}
