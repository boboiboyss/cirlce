import { Box, Text } from "@chakra-ui/react";
import SignInForm from "../../features/auth/components/SignIn";

export default function SignIn() {
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} backgroundColor={'black'} width={'100vw'} height={'100vh'}>
            <Box mt={'60px'}>
                <Text fontSize={'35px'} color={'#04A51E'} 
                fontWeight={'600'} mb={'5px'}>circle</Text>
                <Text color={'white'} fontSize={'23px'} mb={'10px'}>Login to Circle</Text>
                <SignInForm />
            </Box>
        </Box>
    )
}