import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type Props = {
    url: string;
    text: string;
};

export default function RedirectButton(props: Props) {
    return (
        <Link to={props.url}>
            <Button variant="solid" colorScheme="purple" width="full" mt={6}>
                {props.text}
            </Button>
        </Link>
    );
}
