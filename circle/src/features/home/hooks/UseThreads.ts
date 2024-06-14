import { api } from "@/libs/api"
import { useQuery } from "@tanstack/react-query"
import { ThreadEntity } from "@/features/home/entities/Threads"
import { CreateThreadSchema } from "@/features/home/validators/Threads"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { CreateThreadDTO } from "@/types/types"

export const UseThreads = () => {
    const {data : threads, refetch} = useQuery<ThreadEntity[]>({queryKey : ["threads"], queryFn : getThreads})

    const {register, handleSubmit} = useForm<CreateThreadDTO>({
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

    return {threads, register, handleSubmit, onSubmit}
}