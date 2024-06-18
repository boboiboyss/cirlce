import { Box, Button, Input, BoxProps, Text} from "@chakra-ui/react";
import {Link } from "react-router-dom";
import { useLoginForm } from "../hooks/UseLoginForm";



interface IPropsLogin extends BoxProps {}

export default function SignInForm (props: IPropsLogin) {
    const {handleSubmit, onSubmit, register, errors} = useLoginForm()
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box width={'400px'} {...props} display={'flex'} flexDirection={'column'} gap={'10px'}>
                <Input
                    type="email" 
                    placeholder="Email *" 
                    color={'white'}
                    {...register('email')}
                />
                {errors.email && <Text color={'#ff0000'}>{errors.email.message}</Text>}
                <Input 
                    placeholder="Password *" 
                    type="password" 
                    color={'white'}
                    {...register('password')}
                />
                {errors.password && <Text color={'#ff0000'}>{errors.password.message}</Text>}
                <Text textAlign={'right'} color={'white'}>Forgot Password?</Text>
                <Button
                    type='submit'
                    backgroundColor={'#04A51E'} 
                    color={'white'} 
                    borderRadius={'15px'}
                >Login
                </Button>
                <Box display={'flex'}>
                    <Text color={'white'} mr={'10px'}>Don't have an account yet?</Text>
                    <Link to={'/auth/register'} style={{color : '#04A51E'}}>Create Account</Link>
                </Box>
            </Box>
        </form>
    )
}