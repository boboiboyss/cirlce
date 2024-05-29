import Developed from "./profiles/Developed";
import MyProfile from "./profiles/MyProfile";
import Suggested from "./profiles/Suggested";

export function SideBarRight(){
    return (
        <div style={{width: '400px', display: 'flex', flexDirection: 'column', padding : '30px'}}>
            <MyProfile />
            <Suggested />
            <Developed />
        </div>
    )
}