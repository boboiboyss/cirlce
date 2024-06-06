import { api } from "@/libs/api";
import { SET_USER } from "@/redux/slices/AuthSlices";
import { Box, Button, Input, BoxProps, Text} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

interface IPropsLogin extends BoxProps {}

type LoginForm = {
    email : string,
    password : string
}

export default function SignInForm (props: IPropsLogin) {

    const [form, setForm] = useState<LoginForm>({
        email : "",
        password : "",
    });

    function handleChange(event : React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target
       setForm({
        ...form,
        [name] : value
       })
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

   async function handleSubmit(){
        try {
            const respon = await api.post("/auth/login", form);
            const {token, user} = respon.data;

            if(token) {
                localStorage.setItem("token", respon.data.token)
            }
            if(user) {
                dispatch(SET_USER(user))
                navigate('/')
            } 
                
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Box width={'400px'} {...props} display={'flex'} flexDirection={'column'} gap={'10px'}>
            <Text color={'white'} fontWeight={'500'}>Email</Text>
            <Input
                name="email"
                type="email" 
                placeholder="Email" 
                color={'white'}
                onChange={handleChange}
            />
            <Text color={'white'} fontWeight={'500'}>Password</Text>
            <Input 
                name="password" 
                placeholder="Password" 
                type="password" 
                color={'white'}
                onChange={handleChange}
            />
            <Button onClick={handleSubmit} backgroundColor={'#04A51E'} color={'white'} borderRadius={'15px'}>Login</Button>
            <Box display={'flex'}>
                <Text color={'white'} mr={'10px'}>Don't have an account yet?</Text>
                <Link to={'/auth/register'} style={{color : '#1e0fbe'}}>Create Account</Link>
            </Box>
        </Box>
    )
}