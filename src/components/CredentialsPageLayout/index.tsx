/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as BananaIcon } from '../../assets/icons/icon.svg';
import { Flex, chakra } from '@chakra-ui/react';

type Props = {
    children: any;
};

const ChakraBananaIcon = chakra(BananaIcon);

export default function CredentialsPageLayout(props: Props) {
    return (
        <Flex layerStyle="credentialsLayout">
            <ChakraBananaIcon
                w={['50%', null, '70%']}
                h={['50%', null, '70%']}
            />
            {props.children}
        </Flex>
    );
}
