import ListFollow from "@/components/ListFollow";
import { SideBarLeft } from "@/components/SideBarLeft";
import { SideBarRight } from "@/components/SideBarRight";
import Thread from "@/components/Thread";
import { UserSearch } from "@/features/search/types/search";
import { api } from "@/libs/api";
import {Box, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDebounce } from 'use-debounce';

export default function SearchPage() {
    
    const [searchInput, setSearchInput] = useState<string>('')
    const [debounceSearch] = useDebounce(searchInput, 500)
    const [searchData, setSearchData] = useState<UserSearch[]>([])

    async function handleChange(e : React.ChangeEvent<HTMLInputElement>){
        setSearchInput(e.target.value)
    }

    async function getdata(){
      try {
        const response = await api.get(`/users?search=${debounceSearch}`);
        setSearchData(response.data);
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
        getdata();
    }, [debounceSearch])

    return (
        <Box color={'white'} display={'flex'} flexDirection={'row'} bg={'black'} height={'100vh'}>
        <SideBarLeft />
        <Thread>
        <Box p={'20px'}>
            <Input placeholder={'Search'} border={'transparent'} onChange={handleChange} borderRadius={'20px'} bg={'#1C1C1C'} mb={'10px'}/>
            {
                searchData.length > 0 ? searchData?.map((user) => {
                    return (
                        <ListFollow key={user.email} image={user.photoProfile? user.photoProfile : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKH_bnKaBMqqfEpyIQJykfLn8ylX52dDjbHg&s'} nama={user.fullName} email={user.email} bio={user.bio} />   
                    )
                }) : (
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} mt={'200px'}>
                        <Text>No results for "{searchInput}"</Text>
                        <Text color={'grey'} fontSize={'13px'}>Try searching for something else or check the spelling of what you typed. </Text>
                    </Box>
                )
            }
        </Box>
        </Thread>
        <SideBarRight />
        </Box>
    )
}