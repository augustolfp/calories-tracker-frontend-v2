import {
    Input,
    Button,
    FormControl,
    FormLabel,
    CircularProgress,
    Box,
    VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
type Props = {
    name: string;
    setName: any;
    email: string;
    setEmail: any;
    password: string;
    setPassword: any;
    loading: boolean;
    handleNewUser: any;
};

export default function SignUpForm(props: Props) {
    return (
        <Box layerStyle="credentialsCard">
            <Box as="h2">Cadastro</Box>
            <form onSubmit={props.handleNewUser}>
                <VStack spacing={8}>
                    <FormControl isRequired>
                        <FormLabel as="h3">Nome</FormLabel>
                        <Input
                            variant="credentialsVariant"
                            type="text"
                            name="name"
                            value={props.name}
                            onChange={(e) => {
                                props.setName(e.target.value);
                            }}
                            placeholder="nome"
                            disabled={props.loading}
                            required
                        />
                    </FormControl>
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
                            'Cadastrar'
                        )}
                    </Button>
                </VStack>
            </form>
            <Link to="/">
                <Box as="h5">Já tem uma conta? Faça login!</Box>
            </Link>
        </Box>
    );
}
