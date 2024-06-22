import { ThreadEntity } from "@/features/home/entities/Threads";
import { UserEntity } from "@/features/home/entities/User";
import { CreateUserSchema } from "@/features/home/validators/Threads";
import { api } from "@/libs/api";
import { CreateUserDTO } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";


export function useProfile() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const {data:user, refetch} = useQuery<UserEntity>({queryKey : ['user'], queryFn : getUser})
    const {data:threads} = useQuery<ThreadEntity[]>({queryKey : ['threadsMe'], queryFn : getThreads})

    const {register, handleSubmit} = useForm<CreateUserDTO>({
        mode : 'onSubmit',
        resolver : zodResolver(CreateUserSchema)
    })

    async function getThreads() {
        try {
            const response = await api.get('/threads-me', {
                headers : {
                    Authorization : `Bearer ${localStorage.token}`
                }
            });
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    async function getUser(){
        try {
            const response = await api.get('users/me', {
                headers : {
                    Authorization : `Bearer ${localStorage.token}`
                }
            });
           return response.data
        } catch (error) {
            console.log(error)
        }
    }

    const {mutateAsync} = useMutation<UserEntity, AxiosError, CreateUserDTO>({
        mutationFn : (newUser) => {
            const formData = new FormData();
            formData.append('fullName', newUser.fullName);
            formData.append('username', newUser.username);
            formData.append('bio', newUser.bio);
            formData.append('photoProfile', newUser.photoProfile[0])
            console.log(newUser)

            return api.patch('users', formData)
        }
    })

    const onSubmit: SubmitHandler<CreateUserDTO> = async (data) => {
        try {
            // const formData = new FormData();
            // formData.append('fullName', data.fullName);
            // formData.append('username', data.username);
            // formData.append('bio', data.bio);
            // formData.append('photoProfile', data.photoProfile[0]);

            // await api.patch('users', formData);
            await mutateAsync(data);
            refetch();
            setIsOpen(!isOpen)

        } catch (error) {
            console.log(error)
        }
    }

    const toggle = () => setIsOpen(!isOpen)

    return {
        isOpen,
        user,
        threads,
        register,
        handleSubmit,
        onSubmit,
        toggle
    }
}