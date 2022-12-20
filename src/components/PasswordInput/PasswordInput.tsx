import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';

type Props = {
    password: string;
    setPassword: any;
    loading: boolean;
};

export default function PasswordInput(props: Props) {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <InputGroup>
            <Input
                type={show ? 'text' : 'password'}
                name="password"
                focusBorderColor="pageGreen.500"
                value={props.password}
                onChange={(e) => {
                    props.setPassword(e.target.value);
                }}
                placeholder="senha"
                disabled={props.loading}
                required
            />
            <InputRightElement>
                <Button variant="unstyled" onClick={handleClick}>
                    {show ? (
                        <ViewOffIcon w="full" h="full" color="pageGreen.500" />
                    ) : (
                        <ViewIcon w="full" h="full" color="pageGreen.500" />
                    )}
                </Button>
            </InputRightElement>
        </InputGroup>
    );
}
