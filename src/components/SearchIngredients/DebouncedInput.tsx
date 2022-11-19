import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

type Props = {
    searchTerm: string;
    setSearchTerm: any;
};

export default function DebouncedInput(props: Props) {
    return (
        <Container>
            <DebounceInput
                minLength={3}
                debounceTimeout={300}
                value={props.searchTerm}
                placeholder="Pesquise aqui"
                onChange={(e) => props.setSearchTerm(e.target.value)}
            />
        </Container>
    );
}

const Container = styled.div`
    position: sticky;
    top: 0;

    input {
        all: unset;
    }

    input {
        width: 100%;
        background-color: white;
        box-sizing: border-box;
        border: 1px solid #3db9a2;
        border-radius: 4px;
        padding: 4px 8px;

        ::placeholder {
            color: #85d0ca;
        }
    }

    input:focus {
        border: 2px solid #3db9a2;
    }
`;
