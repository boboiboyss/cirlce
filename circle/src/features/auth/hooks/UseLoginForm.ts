import { api } from "@/libs/api";
import { SET_USER } from "@/redux/slices/AuthSlices";
import { useDispatch } from "react-redux";
import {useNavigate } from "react-router-dom";
import {useToast} from '@chakra-ui/react';
import {useForm, SubmitHandler} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validator/LoginForm";
import { LoginForm } from "@/types/types";

export const useLoginForm = () => {
    const toast = useToast();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit, formState : {errors} } = useForm<LoginForm>({
        mode : 'onChange',
        resolver : zodResolver(loginSchema)
    })

    const onSubmit : SubmitHandler<LoginForm> = async (data) => {
        try {
            const respon = await api.post("/auth/login", data);
            const {token, user} = respon.data;

            if(token) {
                localStorage.setItem("token", token)
            }
            if(user) {
                dispatch(SET_USER(user))
                toast({
                    title : 'Login Success',
                    status : 'success',
                    duration : 3000,
                    isClosable : true

                })
                navigate('/')
            } 
                
        } catch (error) {
            toast({
                title : 'Email / Password is wrong!',
                status : 'error',
                duration : 3000,
                isClosable : true
            })
        }
    }

    return {
        register,
        handleSubmit,
        onSubmit,
        errors
    }
}