import {RiHome7Fill, RiUserSearchLine} from 'react-icons/ri'
import {CiLogout } from "react-icons/ci";
import {FaRegHeart} from 'react-icons/fa'
import { CgProfile } from "react-icons/cg";
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function SideBarLeft () {
    return(
        //TODO : refactor dan fixing component
        <Flex width={'300px'} p={'10px 30px 30px 30px'} height={'100vh'} flexDirection={'column'}>
            <Flex flexDirection={'column'}>
                <Text fontSize={'40px'} color={'#04A51E'} fontWeight={'600'} mb={'5px'}>circle</Text>
                <Flex alignItems={'center'} mb={'20px'}>
                    <Link to={'/'} >
                        <Flex>
                            <RiHome7Fill style={{fontSize: '25px', marginRight : '8px'}}/>
                            <Text>Home</Text>
                        </Flex>
                    </Link>
                </Flex>
                <Flex alignItems={'center'} mb={'20px'}>
                    <Link to={'/search'} >
                        <Flex>
                            <RiUserSearchLine style={{fontSize: '25px', marginRight : '8px'}} />
                            <Text>Search</Text>
                        </Flex>
                    </Link>
                </Flex>
                <Flex alignItems={'center'} mb={'20px'}>
                    <Link to={'/follows'} >
                        <Flex>
                            <FaRegHeart style={{fontSize: '25px', marginRight : '8px'}}/>
                            <Text>Follows</Text>
                        </Flex>
                    </Link>
                </Flex>
                <Flex alignItems={'center'} mb={'20px'}>
                    <Link to={'/profile'} >
                        <Flex>
                            <CgProfile style={{fontSize: '25px', marginRight : '8px'}} />
                            <Text>Profile</Text>
                        </Flex>
                    </Link>
                </Flex>
                <Box>
                    <Button style={{width:'100%', backgroundColor:'#04A51E',color:'white',borderRadius:'40px', padding : '5px'}}>Create Post</Button>
                </Box>
            </Flex>

            <Flex alignItems={'center'} mt={'auto'}>
                <CiLogout style={{fontSize: '25px', marginRight : '5px'}} />
                <p>Logout</p>
            </Flex>
        </Flex>
    )
}

