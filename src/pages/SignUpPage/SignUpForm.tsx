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
            <Box as="h2" textStyle="h2" textAlign="center" fontWeight="600">
                Cadastro
            </Box>
            <form onSubmit={props.handleNewUser}>
                <VStack spacing={8}>
                    <FormControl isRequired>
                        <FormLabel as="h3" textStyle="h3">
                            Nome
                        </FormLabel>
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
                        <FormLabel as="h3" textStyle="h3">
                            Email
                        </FormLabel>
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
                        <FormLabel as="h3" textStyle="h3">
                            Senha
                        </FormLabel>
                        <PasswordInput
                            password={props.password}
                            setPassword={props.setPassword}
                            loading={props.loading}
                        />
                    </FormControl>
                    <Button type="submit" w="full" disabled={props.loading}>
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
                </VStack>
            </form>
            <Link to="/">
                <Box textStyle="h3" fontSize="sm" textAlign="center" mt={4}>
                    Já tem uma conta? Faça login!
                </Box>
            </Link>
        </Box>
    );
}
