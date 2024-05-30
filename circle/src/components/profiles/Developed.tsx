import { FaGithub, FaLinkedin, FaFacebook, FaInstagram  } from "react-icons/fa";
import {Flex, Text} from '@chakra-ui/react'

export default function Developed () { 
    return (
        <Flex flexDirection={'column'} p={3} backgroundColor={'#0F1010'} borderRadius={'8px'} mb={'10px'}>
            <Flex alignItems={'center'} fontSize={'15px'}>
                <Text style={{fontSize : '13px', marginRight : '5px'}}>Developed by Boy Simbolon • </Text>
                <FaGithub style={{marginRight : '8px'}}/>
                <FaLinkedin style={{marginRight : '8px'}}/>
                <FaFacebook style={{marginRight : '8px'}}/>
                <FaInstagram style={{marginRight : '8px'}} />
            </Flex>
            <Text color={'grey'} fontSize={'14px'}>Powered by DumbWays Indonesia • #1Coding Bootcamp</Text>
        </Flex>  
    )
}