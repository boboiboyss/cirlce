import { SideBarLeft } from "@/components/SideBarLeft"
import { SideBarRight } from "@/components/SideBarRight"
import Thread from "@/components/Thread"
import { Box, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"

export default function FollowsPage () {
    return (
        <Box color={'white'} display={'flex'} flexDirection={'row'} bg={'black'}>
         <SideBarLeft />
        <Thread>
        <Tabs isFitted variant='unstyled' overflow={'hidden'} position={'relative'}>
                    <TabList>
                        <Tab>Following</Tab>
                        <Tab>Followers</Tab>
                    </TabList>
                    <TabIndicator mt='-1.5px' height='2px' bg='green' borderRadius='1px' />
                    <TabPanels>
                        <TabPanel>
                            <Tab>Following</Tab>
                        </TabPanel>
                        <TabPanel>
                            <Tab>Followers</Tab>    
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Thread>
            <SideBarRight />
            </Box>
    )
}