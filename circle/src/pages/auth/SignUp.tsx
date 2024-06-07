import { Box, Text } from "@chakra-ui/react";
import SignUpForm from "@/features/auth/components/SignUp";

export default function SignUp() {
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} backgroundColor={'black'} width={'100vw'} height={'100vh'}>
            <Box mt={'60px'}>
                <Text fontSize={'35px'} color={'#04A51E'} 
                fontWeight={'600'} mb={'5px'}>circle</Text>
                <SignUpForm />
            </Box>
        </Box>
    )
}