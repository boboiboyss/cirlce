import {RiHome7Fill, RiUserSearchLine} from 'react-icons/ri'
import {CiLogout } from "react-icons/ci";
import {FaRegHeart} from 'react-icons/fa'
import { CgProfile } from "react-icons/cg";

export function SideBarLeft () {
    return(
        <div style={{width:'300px', padding : '10px 30px 30px 30px', height : '100vh', display: 'flex', flexDirection: 'column'}}>
            <div style={{display:'flex',flexDirection:'column'}}>
                <p style={{fontSize:'40px', color:'#04A51E', fontWeight:'600', marginBottom : '5px'}}>circle</p>
                <div style={{display: 'flex', flexDirection:'row', marginBottom:'20px', alignItems: 'center'}}>
                    <RiHome7Fill style={{fontSize: '25px', marginRight : '8px'}}/>
                    <p>Home</p>
                </div>
                <div style={{display: 'flex', flexDirection:'row', marginBottom:'20px', alignItems: 'center'}}>
                    <RiUserSearchLine style={{fontSize: '25px', marginRight : '8px'}} />
                    <p>Search</p>
                </div>
                <div style={{display: 'flex', flexDirection:'row',marginBottom:'20px', alignItems: 'center'}}>
                    <FaRegHeart style={{fontSize: '25px', marginRight : '8px'}}/>
                    <p>Follows</p>
                </div>
                <div style={{display: 'flex', flexDirection:'row', marginBottom:'20px', alignItems: 'center'}}>
                    <CgProfile style={{fontSize: '25px', marginRight : '8px'}} />
                    <p>Profile</p>
                </div>
                <div>
                    <button style={{width:'100%', backgroundColor:'#04A51E',color:'white',borderRadius:'40px', padding : '5px'}}>Create Post</button>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection : 'row', alignItems : 'center', marginTop : 'auto'}}>
                <CiLogout style={{fontSize: '25px', marginRight : '5px'}} />
                <p>Logout</p>
            </div>
        </div>
    )
}

