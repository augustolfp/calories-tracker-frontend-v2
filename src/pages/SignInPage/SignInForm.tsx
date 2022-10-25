import { Input, Button } from '@chakra-ui/react';

type Props = {
    email: string;
    setEmail: any;
    password: string;
    setPassword: any;
    loading: boolean;
    handleLogin: any;
};

export default function SignInForm(props: Props) {
    return (
        <form onSubmit={props.handleLogin}>
            <Input
                variant="filled"
                mb={3}
                type="email"
                name="email"
                focusBorderColor="purple.400"
                value={props.email}
                onChange={(e) => props.setEmail(e.target.value)}
                placeholder="email"
                disabled={props.loading}
                required
            />
            <Input
                variant="filled"
                mb={3}
                type="password"
                name="password"
                focusBorderColor="purple.400"
                value={props.password}
                onChange={(e) => props.setPassword(e.target.value)}
                placeholder="senha"
                disabled={props.loading}
                required
            />
            <Button
                colorScheme="purple"
                mb={6}
                type="submit"
                disabled={props.loading}
            >
                ENTRAR
            </Button>
        </form>
    );
}
