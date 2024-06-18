import { Box } from "@chakra-ui/react";
import Developed from "./profiles/Developed";
import MyProfile from "./profiles/MyProfile";
import Suggested from "./profiles/Suggested";

export function SideBarRight(){
    return (
        <Box width={'400px'} height={'100vh'} display={'flex'} flexDirection={'column'} p={'30px'}>
            <MyProfile />
            <Suggested />
            <Developed />
        </Box>
    )
}