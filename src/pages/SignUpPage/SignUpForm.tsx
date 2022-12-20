import {
    Input,
    InputGroup,
    InputRightElement,
    Button,
    FormControl,
    FormLabel,
    CircularProgress,
    Box,
    VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
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
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
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
                            type="text"
                            name="name"
                            focusBorderColor="#3db9a2"
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
