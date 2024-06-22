import { Text } from "@chakra-ui/react";

export default function Tittle ({tittle} : {tittle : string | undefined}) {
    return (
        <Text fontSize={'20px'} fontWeight={'600'} m={'20px'}>{tittle}</Text>
        
    )
}