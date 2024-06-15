import ListFollow from "@/components/ListFollow";
import { UserSearch } from "@/features/search/types/search";
import { api } from "@/libs/api";
import { Box, Input } from "@chakra-ui/react";
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
        <Box display={'flex'} alignItems={'center'}>
            <Box width={'500px'} border={'1px solid grey'} padding={'10px'}>
            <Input placeholder={'Search'} border={'transparent'} fontStyle={'italic'} onChange={handleChange} />
            {
                searchData.map((user) => {
                    return (
                        <ListFollow image={user.photoProfile} nama={user.fullName} email={user.email} bio={user.bio} />
                    )
                })
            }
            </Box>
        </Box>
    )
}