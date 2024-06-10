import { SideBarLeft } from "../components/SideBarLeft"
import { SideBarRight } from "../components/SideBarRight"
import Thread from "../components/Thread"
import { api } from "@/libs/api"
import ThreadCard from "@/features/home/components/ThreadCard"
import { useQuery } from "@tanstack/react-query"
import { ThreadEntity } from "@/features/home/entities/Threads"
import { CreateThreadSchema } from "@/features/home/validators/Threads"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { CreateThreadDTO } from "@/types/types"
import { Button, Input } from "@chakra-ui/react"



export default function Home () {
    const {data : threads, refetch} = useQuery<ThreadEntity[]>({queryKey : ["threads"], queryFn : getThreads})

    const {register, handleSubmit, formState : {errors} } = useForm<CreateThreadDTO>({
        mode : 'onSubmit',
        resolver : zodResolver(CreateThreadSchema)
    })

    async function getThreads() {
        try {
            const response = await api.get('/threads', {
                headers : {
                    Authorization : `Bearer ${localStorage.token}`
                }
            })
            return response.data
        } catch(error) {
            console.log(error)
        }
    }

    const {mutateAsync} = useMutation<ThreadEntity, AxiosError, CreateThreadDTO>({
        mutationFn: (newThread) => {
            const formData = new FormData()
            formData.append('content', newThread.content)
            formData.append('image', newThread.image[0])
            return api.post('/threads', formData);
        }
    })

    const onSubmit : SubmitHandler<CreateThreadDTO> = async (data) => {
        try {
             await mutateAsync(data);
             refetch();
        } catch (error) {
             console.log(error)
        }
     }
 
     console.log(errors)
    return (
        <div style={{
                color : 'white', 
                display : 'flex', 
                flexDirection : 'row',
                background: 'black'}}>
            <SideBarLeft />
            <Thread>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register('content')} />
                <Input type="file" {...register('image')} />
                <Button type="submit" color={'white'} background={'green'}>Post</Button>
            </form>   
            {threads?.map((thread, index) => <ThreadCard key={index} thread={thread} />
            )}
            </Thread>
            <SideBarRight />            
        </div>
    )
}