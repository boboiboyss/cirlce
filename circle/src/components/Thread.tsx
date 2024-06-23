import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

export const scrollX = {
    "overflow-x" : "hidden",
    "::-webkit-scrollbar" : {
        width : "5px"
    },
    "::-webkit-scrollbar-track": {
        border : "5px solid black"
    },
    "::-webkit-scrollbar-thumb": {
        background : "linear-gradient(transparent, white, grey)",
        borderRadius : '5px'
    }
}

export default function Thread ({children} : {children :ReactNode}) {
  
    return (
        <Box width={'700px'} display={'flex'} flexDirection={'column'} borderRight={'1px solid grey'} borderLeft={'1px solid grey'} height={'100vh'} overflow={'scroll'} sx={scrollX}>
            {children}
        </Box>
    )
}