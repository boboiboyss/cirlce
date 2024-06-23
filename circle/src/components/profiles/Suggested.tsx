import ListFollow from "../ListFollow"
import {Flex, Text} from '@chakra-ui/react'

export default function Suggested () {

    return (
        <Flex flexDirection={'column'} p={3} background={"#0F1010"} borderRadius={'8px'} mb={'10px'}> 
             <Text mb={'10px'} fontWeight={500} fontSize={'15px'}>Suggested for you</Text>
            <ListFollow 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZEF5qhSdfiwYM0lM5Rh8CzreUS7NIPGd_Kw&s"
                nama="Rudi Alvin"
                email="@rudialvin"
                id={0}
             />

             <ListFollow 
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0F_B5cWN34xluEtCBpYYEjPoFxRN8u_sOBQ&s"
               nama="Reza Chandra"
               email="@rezachandra"
               id={0}
             />

            <ListFollow 
                image="https://p1.hiclipart.com/preview/323/743/633/icon-person-icon-design-symbol-avatar-silhouette-character-cartoon-head-png-clipart-thumbnail.jpg"  
                nama="Felix Cahyadi"
                email="@felixcahyadi"
                id={0}
                />

            <ListFollow 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzXD140wCYEKBSqQq9hBF1QEVY3YZ39GqEA&s"
                nama="Indra Saputra"
                email="@indrasaputra"
                id={0}
            />

        </Flex>
    )
}