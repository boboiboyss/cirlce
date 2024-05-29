import DetailPost from "../components/DetailPost";
import { SideBarLeft } from "../components/SideBarLeft";
import { SideBarRight } from "../components/SideBarRight";

export default function DetailPostPage () {
    return  (
        <div style={{
            backgroundColor: 'black', 
            color : 'white', 
            display : 'flex', 
            flexDirection : 'row'}}>
        <SideBarLeft />
        <DetailPost />
        <SideBarRight />
    </div>
    )
}