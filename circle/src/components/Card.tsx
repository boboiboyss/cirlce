import { FaHeart } from "react-icons/fa";
import { TfiCommentAlt } from "react-icons/tfi";
import { ICard } from "../types/types";
import { useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";


export default function CardComponent (props : ICard) {
    const {name, email, post_at, content, replies_count, image, likes_count, is_like} = props;
    const [isLike, setIsLike] = useState<boolean>(is_like)

    return (
        <Flex borderBottom={'1px solid grey'} p={'20px'}>
        <Flex >
            <Image src={image} alt="img-suggested" style={{width :'35px', height : '35px', borderRadius: '50%', marginRight : '10px'}}/>
            <Flex flexDirection={'column'}>
                <Flex alignItems={'center'}>
                    <Text fontSize={'13px'}>{name}</Text> 
                    <Text color={'grey'} ml={'5px'} fontSize={'13px'}>{email} • {post_at}</Text>
                </Flex>
                <Box>
                    <Text  style={{fontSize : '13px'}}>{content}</Text>
                </Box>
                <Flex mt={'10px'}>
                    <Flex alignItems={'center'}>
                        <FaHeart onClick={() => setIsLike(!isLike)} style={{color : isLike ? 'red' : 'grey'}}/>
                        <Text fontSize={'13px'} color={'grey'} ml={'5px'}>{likes_count}</Text>
                    </Flex>
                    <Flex alignItems={'center'} color={'grey'} marginLeft={'20px'}>
                        <TfiCommentAlt />
                        <Text ml={'5px'} fontSize={'13px'}>{replies_count} Replies</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
    )
}
