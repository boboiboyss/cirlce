import { SideBarLeft } from "@/components/SideBarLeft";
import { SideBarRight } from "@/components/SideBarRight";
import Thread, { scrollX } from "@/components/Thread";
import Tittle from "@/components/Tittle";
import ThreadCard from "@/features/home/components/ThreadCard";
import { ThreadEntity } from "@/features/home/entities/Threads";
// import { useProfile } from "@/features/profile/hooks/useProfile";
import { api } from "@/libs/api";
import { SET_USER } from "@/redux/slices/AuthSlices";
import { RootState } from "@/redux/store/store";
import { Box, Button, Flex, Image, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

import { Link, Params, useParams } from "react-router-dom";

export default function DetailUserPage () {
    const {id} = useParams<Params<string>>();
    const [threads, setThreads] = useState<ThreadEntity[]>([])
    const currentUser = useSelector((state: RootState) => state.auth.user);
    const idUser = id? +id : NaN
    const dispatch = useDispatch()

        async function getUser(){
            try {
                const response = await api.get(`users/${idUser}`, {
                    headers : {
                        Authorization : `Bearer ${localStorage.token}`
                    }
                });
                dispatch(SET_USER(response.data));
               return response.data
            } catch (error) {
                console.log(error)
            }
        }

        async function getThreads() {
            try {
                const response = await api.get(`/threads-me/${idUser}`, {
                    headers : {
                        Authorization : `Bearer ${localStorage.token}`
                    }
                });
                setThreads(response.data)
                return response.data
            } catch (error) {
                console.log(error)
            }
        }

    useEffect(() => {
        getUser();
        getThreads();
    }, [currentUser, threads])
    
    console.log(currentUser)

    // const [isOpen, setIsOpen] = useState<boolean>(false)

    // const {data:user, refetch} = useQuery<UserEntity>({queryKey : ['user'], queryFn : getUser})
    // const {data:threads} = useQuery<ThreadEntity[]>({queryKey : ['threadsMe'], queryFn : getThreads})

    // const {register, handleSubmit} = useForm<CreateUserDTO>({
    //     mode : 'onSubmit',
    //     resolver : zodResolver(CreateUserSchema)
    // })

    // async function getThreads() {
    //     try {
    //         const response = await api.get('/threads-me', {
    //             headers : {
    //                 Authorization : `Bearer ${localStorage.token}`
    //             }
    //         });
    //         return response.data
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // async function getUser(){
    //     try {
    //         const response = await api.get('users/me', {
    //             headers : {
    //                 Authorization : `Bearer ${localStorage.token}`
    //             }
    //         });
    //        return response.data
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const {mutateAsync} = useMutation<UserEntity, AxiosError, CreateUserDTO>({
    //     mutationFn : (newUser) => {
    //         const formData = new FormData();
    //         formData.append('fullName', newUser.fullName);
    //         formData.append('username', newUser.username);
    //         formData.append('bio', newUser.bio);
    //         formData.append('photoProfile', newUser.photoProfile[0])

    //         return api.patch('users', formData)
    //     }
    // })

    // const onSubmit: SubmitHandler<CreateUserDTO> = async (data) => {
    //     try {
    //         // const formData = new FormData();
    //         // formData.append('fullName', data.fullName);
    //         // formData.append('username', data.username);
    //         // formData.append('bio', data.bio);
    //         // formData.append('photoProfile', data.photoProfile[0]);

    //         // await api.patch('users', formData);
    //         await mutateAsync(data);
    //         refetch();
    //         setIsOpen(!isOpen);

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const toggle = () => setIsOpen(!isOpen)
 
    return (
        <Box color={'white'} display={'flex'} flexDirection={'row'} bg={'black'}>
            <SideBarLeft/>
            <Thread>
                
              <Box p={'20px'} >
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
                        <Image src={currentUser.photoProfile? currentUser.photoProfile : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKH_bnKaBMqqfEpyIQJykfLn8ylX52dDjbHg&s'}  alt="img-profile" style={{width: '60px', height : '60px', borderRadius: '50%', border: '3px solid black', position: 'absolute', top : '145px', marginLeft : '15px'}}/>
                        
                        <Button height={'30px'} border={'1px solid white'} p={'0px 10px'} fontSize={'12px'} borderRadius={'30px'} float={'right'} mt={'8px'} bg={'transparent'} color={'white'}> Follow</Button>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} gap={'3px'}>
                        <Text fontSize={'17px'} fontWeight={'500'}>{currentUser.fullName}</Text>
                        <Text fontSize={'13px'} color={'grey'}>{currentUser.email}</Text>
                        <Text fontSize={'13px'}>{currentUser.bio}</Text>
                        <Flex gap={'5px'}>
                            <Flex alignItems={'center'}>
                                <Text mr={'5px'}>{currentUser.totalFollowings}</Text>
                                <Text color={'grey'}>Following</Text>
                            </Flex>
                            <Flex alignItems={'center'}>
                                <Text mr={'5px'}>{currentUser.totalFollowers} </Text> 
                                <Text color={'grey'}>Followers</Text>
                            </Flex>
                        </Flex>
                        
                    </Box>    
                </Box>
                </Box>

                <Box overflow={'scroll'} sx={scrollX}>
                <Tabs isFitted variant='unstyled' overflow={'hidden'} position={'relative'}>
                    <TabList>
                        <Tab>All Post</Tab>
                        <Tab>Media</Tab>
                    </TabList>
                    <TabIndicator mt='-1.5px' height='2px' bg='green' borderRadius='1px' />
                    <TabPanels>
                        <TabPanel padding={0}>
                            <Box>
                                {
                                    threads? threads?.map((thread) => (
                                        <ThreadCard key={thread.id} thread={thread} />
                                    )) : <Box fontWeight={'800'}>Post not yet</Box>
                                }
                            </Box>
                        </TabPanel>
                        <TabPanel display={'flex'} flexWrap={'wrap'} p={'5px'} justifyContent={'flex-start'}>
                        {
                                    threads? threads?.map((thread, index) => (
                                         <Box key={index}>
                                                <Box m={'5px'}>
                                                    <Image src={thread.image} width={'200px'} height={'200px'}/>
                                                </Box>
                                         </Box>
                                    )) : <Box fontWeight={'800'}>Post not yet</Box>
                                }
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                </Box>
            </Thread>
             <SideBarRight />
        </Box>
    )
}