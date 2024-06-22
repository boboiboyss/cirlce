import { useProfile } from "@/features/profile/hooks/useProfile";
// import { RootState } from "@/redux/store/store"
import { Box, Button, Flex, Image, Text} from "@chakra-ui/react";
// import { useState } from "react";
// import {useSelector } from "react-redux"

export default function MyProfile () {
    // const currentUser = useSelector((state : RootState) => state.auth.user);
    // const [isOpen, setIsOpen] = useState<boolean>(false)
    // const dispatch = useDispatch();
    // const toggle = () => setIsOpen(!isOpen)
    const {user} = useProfile()
    return (
        <Box display={'flex'} flexDirection={'column'} p={'15px'} backgroundColor={'#0F1010'} borderRadius={'8px'} mb={'10px'}>  
            <Text mb={'10px'} fontWeight={'500'} fontSize={'15px'}>My Profile</Text>
            <Box display={'flex'} flexDirection={'column'}>
                <Box width={'100%'} height={'70px'} borderRadius={'8px'} backgroundImage={` url('https://cdn.magicdecor.in/com/2023/11/18154143/Teal-Orange-Yellow-Blue-Dark-Grainy-Color-Gradient-Wallpaper-for-Wall.jpg')`}>
                </Box>
                <Box>
                    <Image src={user?.photoProfile? user?.photoProfile : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKH_bnKaBMqqfEpyIQJykfLn8ylX52dDjbHg&s"}  alt="img-profile" style={{width: '60px', height : '60px', borderRadius: '50%', border: '3px solid black', position: 'absolute', top : '115px', marginLeft : '15px'}}/>
                    
                    <Button height={'30px'} border={'1px solid white'} p={'0px 10px'} fontSize={'12px'} borderRadius={'30px'} float={'right'} mt={'8px'} bg={'transparent'} color={'white'}> Edit Profile</Button>
                </Box>  
                <Box display={'flex'} flexDirection={'column'}>
                    <Text fontSize={'17px'} fontWeight={'500'}>{user?.fullName}</Text>
                    <Text fontSize={'13px'} color={'grey'}>{user?.email}</Text>
                    <Text fontSize={'13px'}>{user?.bio}</Text>
                    <Flex gap={'5px'}>
                        <Flex alignItems={'center'}>
                            <Text mr={'5px'}>103</Text>
                            <Text color={'grey'}>Following</Text>
                        </Flex>
                        <Flex alignItems={'center'}>
                            <Text mr={'5px'}>160 </Text> 
                            <Text color={'grey'}>Followers</Text>
                        </Flex>
                    </Flex>
                    
                </Box>    
            </Box>
        </Box>
    )
}