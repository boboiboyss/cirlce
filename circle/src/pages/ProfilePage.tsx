import { SideBarLeft } from "@/components/SideBarLeft";
import Thread from "@/components/Thread";
import Tittle from "@/components/Tittle";
import Developed from "@/components/profiles/Developed";
import Suggested from "@/components/profiles/Suggested";
import ThreadCard from "@/features/home/components/ThreadCard";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { Box, Button, Card, CardBody, Divider, Flex, Image, Input, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, Textarea } from "@chakra-ui/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LuImagePlus } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function ProfilePage () {
    const {
        isOpen,
        user,
        threads,
        register,
        handleSubmit,
        onSubmit,
        toggle } = useProfile()
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
              <Box p={'20px'}>
                <Link to={'/'}>
                        <Flex alignItems={'center'}>
                            <FaArrowLeftLong style={{fontSize: '25px'}}/>
                            <Tittle tittle={user?.fullName} />
                        </Flex>
                </Link>
                <Box display={'flex'} flexDirection={'column'}>
                    <Box width={'100%'} height={'90px'} borderRadius={'8px'} backgroundImage={` url('https://cdn.magicdecor.in/com/2023/11/18154143/Teal-Orange-Yellow-Blue-Dark-Grainy-Color-Gradient-Wallpaper-for-Wall.jpg')`}>
                    </Box>
                    <Box> 
                        <Image src={user?.photoProfile? user?.photoProfile : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKH_bnKaBMqqfEpyIQJykfLn8ylX52dDjbHg&s'}  alt="img-profile" style={{width: '60px', height : '60px', borderRadius: '50%', border: '3px solid black', position: 'absolute', top : '145px', marginLeft : '15px'}}/>
                        
                        <Button onClick={toggle} height={'30px'} border={'1px solid white'} p={'0px 10px'} fontSize={'12px'} borderRadius={'30px'} float={'right'} mt={'8px'} bg={'transparent'} color={'white'}> Edit Profile</Button>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} gap={'3px'}>
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

                {isOpen && 
                        <Card position={'absolute'} width={'450px'} bg={'#0F1010'} right={'400px'} top={'80px'} color={'white'} zIndex={10}>
                                <CardBody>
                                     <Flex justifyContent={'space-between'} mb={'10px'}>
                                        <Text fontSize={'14px'} fontWeight={'500'}>Edit Profile</Text>
                                        <IoCloseCircleOutline onClick={toggle} style={{fontSize: '25px', color : 'grey'}}/>
                                    </Flex>

                                    <Box width={'100%'} mb={'30px'} height={'90px'} borderRadius={'8px'} backgroundImage={` url('https://cdn.magicdecor.in/com/2023/11/18154143/Teal-Orange-Yellow-Blue-Dark-Grainy-Color-Gradient-Wallpaper-for-Wall.jpg')`}>
                                    </Box>
                                    <Box>
                                    <Image src={user?.photoProfile? user.photoProfile : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKH_bnKaBMqqfEpyIQJykfLn8ylX52dDjbHg&s' }  alt="img-profile" style={{width: '60px', height : '60px', borderRadius: '50%', border: '3px solid black', position: 'absolute', top : '110px', marginLeft : '15px'}}/>
                                      <label htmlFor="fileInput" style={{cursor: 'pointer', top : '122px', left: '47px', position : 'absolute', backgroundColor:'#0F1010', padding: '8px', borderRadius : '50%', opacity : '0.8'}}>
                                            <LuImagePlus style={{fontSize: '20px', color : 'white'}} />
                                      </label>
                                    </Box>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <Box border={'1px solid grey'} borderRadius={'6px'} mb={'10px'} p={'5px'}>
                                           <Text fontSize={'13px'} color={'grey'}>Name</Text>
                                           <Input border={'transparent'} defaultValue={user?.fullName}  variant={'unstyled'} {...register('fullName')}/>
                                        </Box>
                                        <Box border={'1px solid grey'} borderRadius={'6px'} mb={'10px'} p={'5px'}>
                                           <Text fontSize={'13px'} color={'grey'}>Username</Text>
                                           <Input border={'transparent'} defaultValue={user?.username} variant={'unstyled'} {...register('username')} />
                                        </Box>
                                        <Box border={'1px solid grey'} borderRadius={'6px'} mb={'10px'} p={'5px'}>
                                           <Text fontSize={'13px'} color={'grey'}>Bio</Text>
                                           <Textarea border={'transparent'} variant={'unstyled'} resize={'none'} {...register('bio')} defaultValue={user?.bio} />
                                        </Box>
                                        <Input type="file" id="fileInput" display={'none'} {...register('photoProfile')} />
                                        <Divider />
                                        <Button type={'submit'} borderRadius={'40px'} float={'right'} mt={'10px'} bg={'green'} p={'5px 20px'} color={'white'}>Save</Button>
                                    </form>
                                </CardBody>
                                
                        </Card>
                    }

                <Tabs isFitted variant='unstyled' overflow={'hidden'} position={'relative'}>
                    <TabList>
                        <Tab>All Post</Tab>
                        <Tab>Media</Tab>
                    </TabList>
                    <TabIndicator mt='-1.5px' height='2px' bg='green' borderRadius='1px' />
                    <TabPanels>
                        <TabPanel padding={0}>
                            <Box height={'100vh'} overflow={'auto'}>
                                {
                                    threads? threads?.map((thread) => (
                                        <ThreadCard key={thread.id} thread={thread} />
                                    )) : <Box fontWeight={'800'}>Post not yet</Box>
                                }
                            </Box>
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