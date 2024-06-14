import { useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import {Link } from 'react-router-dom'

interface PropsListFollow {
    image : string,
    nama : string,
    email : string,
    bio? : string

}

export default function ListFollow (props : PropsListFollow) {
    const {image, nama, email, bio} = props;

    const [isFollow, setIsFollow ] = useState<boolean>(false)


    return (
        <Flex justifyContent={'space-between'} mb={'8px'}>
                <Flex alignItems={'center'}>
                    <Image src={image} alt="img-suggested" width={'35px'} height={'35px'} borderRadius={'50%'}/>
                    <Flex flexDirection={'column'} ml={'10px'}>
                        <Text fontSize={'12px'}>{nama}</Text>
                        <Text fontSize={'13px'} color={'grey'}>{email}</Text>
                        <Text fontSize={'13px'} color={'grey'}>{bio? bio : null}</Text>
                    </Flex>
                </Flex>
                <Box onClick={() => setIsFollow(!isFollow)}>
                <Link to={'#'}  style={{border : '1px solid white', padding : '3px 10px', fontSize : '12px', borderRadius : '30px', fontWeight:'normal', float :'right', marginTop : '8px'
                    }}> {isFollow? 'following' : 'follow'}</Link>
                </Box>    
        </Flex>
    )
}