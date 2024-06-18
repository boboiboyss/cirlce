import { SideBarLeft } from "@/components/SideBarLeft";
import Thread from "@/components/Thread";
import Tittle from "@/components/Tittle";
import { RootState } from "@/redux/store/store"
import { Box, Button, Flex, Image, Text, Tab, TabList, TabPanels, TabPanel, Tabs, TabIndicator } from "@chakra-ui/react";
import {useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Suggested from "@/components/profiles/Suggested";
import Developed from "@/components/profiles/Developed";


export default function ProfilePage () {
    const currentUser = useSelector((state : RootState) => state.auth.user);
    return (
        <Box color={'white'} display={'flex'} flexDirection={'row'} bg={'black'}>
            <SideBarLeft/>
            <Thread>
              <Box p={'20px'}>
                <Link to={'/'}>
                        <Flex alignItems={'center'}>
                            <FaArrowLeftLong style={{fontSize: '25px'}}/>
                            <Tittle tittle={currentUser.fullName} />
                        </Flex>
                </Link>
                <Box display={'flex'} flexDirection={'column'}>
                    <Box width={'100%'} height={'90px'} borderRadius={'8px'} backgroundImage={` url('https://cdn.magicdecor.in/com/2023/11/18154143/Teal-Orange-Yellow-Blue-Dark-Grainy-Color-Gradient-Wallpaper-for-Wall.jpg')`}>
                    </Box>
                    <Box>
                        {currentUser.photoProfile? <Image src={currentUser.photoProfile} alt="img-profile" style={{width: '60px', height : '60px', borderRadius: '50%', border: '3px solid black', position: 'absolute', top : '200px', marginLeft : '15px'}}/> : 
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKH_bnKaBMqqfEpyIQJykfLn8ylX52dDjbHg&s"  alt="img-profile" style={{width: '60px', height : '60px', borderRadius: '50%', border: '3px solid black', position: 'absolute', top : '145px', marginLeft : '15px'}}/>}
                        
                        <Button height={'30px'} border={'1px solid white'} p={'0px 10px'} fontSize={'12px'} borderRadius={'30px'} float={'right'} mt={'8px'} bg={'transparent'} color={'white'}> Edit Profile</Button>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} gap={'3px'}>
                        <Text fontSize={'17px'} fontWeight={'500'}>{currentUser.fullName}</Text>
                        <Text fontSize={'13px'} color={'grey'}>{currentUser.email}</Text>
                        <Text fontSize={'13px'}>{currentUser.bio}</Text>
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

                <Tabs isFitted variant='unstyled'>
                    <TabList>
                        <Tab>All Post</Tab>
                        <Tab>Media</Tab>
                    </TabList>
                    <TabIndicator mt='-1.5px' height='2px' bg='green' borderRadius='1px' />
                    <TabPanels>
                        <TabPanel>
                        <Text>All Post</Text>
                        </TabPanel>
                        <TabPanel>
                        <Text>Media</Text>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Thread>
            <Box width={'400px'} height={'100vh'} display={'flex'} flexDirection={'column'} p={'30px'}>
            <Suggested/>
            <Developed/>
            </Box>
        </Box>
    )
}