import ThreadCard from "@/features/home/components/ThreadCard"
import { UseThreads } from "@/features/home/hooks/UseThreads"
import { Button, Input } from "@chakra-ui/react"
import { SideBarLeft } from "../components/SideBarLeft"
import { SideBarRight } from "../components/SideBarRight"
import Thread from "../components/Thread"



export default function Home () {
    const {threads, register, handleSubmit, onSubmit} = UseThreads()
    
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