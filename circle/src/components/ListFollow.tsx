// import { useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import {Link } from 'react-router-dom'
import { useFollow } from "@/hooks/useFollow";

interface PropsListFollow {
    id : number
    image : string,
    nama : string,
    email : string,
    bio? : string,

}

export default function ListFollow (props : PropsListFollow) {
    const {image, nama, email, bio, id} = props;
    
    const {followed} = useFollow(id)

    // const [isFollow, setIsFollow ] = useState<boolean>(false)


    return (
        <Flex justifyContent={'space-between'} mb={'8px'}>
                <Flex alignItems={'center'}>
                    <Image src={image? image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKH_bnKaBMqqfEpyIQJykfLn8ylX52dDjbHg&s'} alt="img-suggested" width={'35px'} height={'35px'} borderRadius={'50%'}/>
                    <Flex flexDirection={'column'} ml={'10px'}>
                        <Text fontSize={'12px'}>{nama}</Text>
                        <Text fontSize={'13px'} color={'grey'}>{email}</Text>
                        <Text fontSize={'13px'} color={'grey'}>{bio? bio : null}</Text>
                    </Flex>
                </Flex>
                <Box onClick={followed}>
                <Link to={'#'} style={{border : '1px solid white', padding : '3px 10px', fontSize : '12px', borderRadius : '30px', fontWeight:'normal', float :'right', marginTop : '8px'
                    }}>follow</Link>
                </Box>    
        </Flex>
    )
}