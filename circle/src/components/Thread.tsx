import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"


export default function Thread ({children} : {children :ReactNode}) {
    
    return (
        <Box width={'700px'} display={'flex'} flexDirection={'column'} borderRight={'1px solid grey'} borderLeft={'1px solid grey'} height={'100vh'} overflow={'auto'}>
            {children}
        </Box>
    )
}