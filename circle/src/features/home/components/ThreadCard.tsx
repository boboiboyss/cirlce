import { FaHeart } from "react-icons/fa";
import { TfiCommentAlt } from "react-icons/tfi";
import { useState } from "react";
import { Box, BoxProps, Flex, Image, Text } from "@chakra-ui/react";
import { ThreadEntity } from "../entities/Threads";


interface ThreadCardProps extends BoxProps {
    thread: ThreadEntity
}

export default function ThreadCard ({thread} : ThreadCardProps) {
    const [isLike, setIsLike] = useState<boolean>(false)

    return (
        <Flex borderBottom={'1px solid grey'} p={'20px'}>
        <Flex >
            <Image src={thread?.user?.photoProfile} alt="img-suggested" style={{width :'35px', height : '35px', borderRadius: '50%', marginRight : '10px'}}/>
            <Flex flexDirection={'column'}>
                <Flex alignItems={'center'}>
                    <Text fontSize={'13px'}>{thread?.user?.fullName}</Text> 
                    <Text color={'grey'} ml={'5px'} fontSize={'13px'}>{thread?.user?.email} • 3h</Text>
                </Flex>
                <Box>
                    <Text  style={{fontSize : '13px'}}>{thread.content}</Text>
                    <Image src={thread.image} height={'200px'} width={'250px'} />
                </Box>
                <Flex mt={'10px'}>
                    <Flex alignItems={'center'}>
                        <FaHeart onClick={() => setIsLike(!isLike)} style={{color : isLike ? 'red' : 'grey'}}/>
                        <Text fontSize={'13px'} color={'grey'} ml={'5px'}>40</Text>
                    </Flex>
                    <Flex alignItems={'center'} color={'grey'} marginLeft={'20px'}>
                        <TfiCommentAlt />
                        <Text ml={'5px'} fontSize={'13px'}>60 Replies</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
    )
}
