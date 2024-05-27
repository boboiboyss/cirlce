import { SideBarLeft } from "../components/SideBarLeft"
import { SideBarRight } from "../components/SideBarRight"
import DetailPostPage from "./DetailPostPage"
// import { Thread } from "../components/Thread"

export default function Home () {
    return (
        <div style={{
                backgroundColor: 'black', 
                color : 'white', 
                display : 'flex', 
                flexDirection : 'row'}}>
            <SideBarLeft />
            {/* <Thread /> */}
            <DetailPostPage />
            <SideBarRight />
        </div>
    )
}