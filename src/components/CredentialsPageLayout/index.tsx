/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as BananaIcon } from '../../assets/icons/icon.svg';
import { Flex, Center, Container, chakra } from '@chakra-ui/react';

type Props = {
    children: any;
};

const ChakraBananaIcon = chakra(BananaIcon);

export default function CredentialsPageLayout(props: Props) {
    return (
        <Flex layerStyle="credentialsLayout">
            <ChakraBananaIcon />
            {props.children}
        </Flex>
    );
}
