import ThreadCard from "@/features/home/components/ThreadCard"
import { UseThreads } from "@/features/home/hooks/UseThreads"
import { Box, Button, Flex, Image, Input } from "@chakra-ui/react"
import { SideBarLeft } from "../components/SideBarLeft"
import { SideBarRight } from "../components/SideBarRight"
import Thread from "../components/Thread"
import { LuImagePlus } from "react-icons/lu"




export default function Home () {
    const {threads, register, handleSubmit, onSubmit} = UseThreads()
    
    return (
        <Box color={'white'} display={'flex'} flexDirection={'row'} bg={'black'}>
            <SideBarLeft />
            <Thread>
            <Flex className="thread" alignItems={'center'} p={'20px'} borderBottom={'1px solid grey'}>
                <Image width={'35px'} height={'35px'} borderRadius={'50%'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOs9pBGGQuGe0JKeFg1XegK87RXxs1mIHyyg&s" alt="img-suggested" />
                <Box width={'100%'}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex alignItems={'center'}>
                    <Input placeholder={'What is happening?!'} border={'transparent'} {...register('content')} />
                    <Input type="file" display={'none'} id="fileInput" {...register('image')} />
                    <label htmlFor="fileInput">
                    <LuImagePlus style={{marginRight : '10px', color : 'grey', fontSize : '30px'}}/>
                    </label>
                    <Button type={'submit'} mr={'10px'} backgroundColor={'green'} color={'white'} p={'1px 20px'} borderRadius={'15px'}>Post</Button>
                    </Flex>
                </form>
                </Box>
            </Flex>
            {threads?.map((thread, index) => 
                <ThreadCard key={index} thread={thread} />
            )}
            </Thread>
            <SideBarRight />            
        </Box>
    )
}