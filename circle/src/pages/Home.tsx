import { SideBarLeft } from "../components/SideBarLeft"
import { SideBarRight } from "../components/SideBarRight"
import Thread from "../components/Thread"

export default function Home () {
    return (
        <div style={{
                color : 'white', 
                display : 'flex', 
                flexDirection : 'row',
                background: 'black'}}>
            <SideBarLeft />
            <Thread />
            <SideBarRight />
        </div>
    )
}