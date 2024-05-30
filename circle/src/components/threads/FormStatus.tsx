import { Flex, Image, Input, Button } from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";

export default function FormStatus({placeholder, color, reply} : {placeholder : string, color : string, reply : string}) {
    return (
        <Flex alignItems={'center'} p={'20px'} borderBottom={'1px solid grey'}>
            <Image width={'35px'} height={'35px'} borderRadius={'50%'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOs9pBGGQuGe0JKeFg1XegK87RXxs1mIHyyg&s" alt="img-suggested" />
            <Input placeholder={placeholder} border={'transparent'}></Input>
            <LuImagePlus style={{marginRight : '10px', color : color, fontSize : '30px'}} />
            <Button mr={'10px'} backgroundColor={'green'} color={'white'} p={'1px 10px'} borderRadius={'15px'}>{reply}</Button>
        </Flex>
    )
}