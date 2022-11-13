import {
    Input,
    Button,
    FormControl,
    FormLabel,
    CircularProgress,
    Box,
    VStack,
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
        <Box layerStyle="credentialsCard">
            <Box
                as="h2"
                textStyle="h2"
                textAlign="center"
                m={4}
                fontWeight="600"
            >
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
                                props.setErrMsg('');
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
        </Box>
    );
}
