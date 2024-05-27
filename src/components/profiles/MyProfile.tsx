// import { border } from "@chakra-ui/react";

export default function MyProfile () {
    return (
        <div style={{display : 'flex', flexDirection : 'column', padding : '15px', backgroundColor : '#0F1010', borderRadius : '8px', marginBottom : '10px'}}>  
            <p style={{marginBottom: '10px', fontWeight : '500', fontSize : '15px'}}>My Profile</p>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{width : '100%', height : '70px', borderRadius: '8px', backgroundImage :` url('https://cdn.magicdecor.in/com/2023/11/18154143/Teal-Orange-Yellow-Blue-Dark-Grainy-Color-Gradient-Wallpaper-for-Wall.jpg')`}}>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKH_bnKaBMqqfEpyIQJykfLn8ylX52dDjbHg&s"  alt="img-profile" style={{width: '60px', height : '60px', borderRadius: '50%', border: '3px solid black', position: 'absolute', top : '115px', marginLeft : '15px'}}/>
                    <a href=""  style={{border : '1px solid white', padding : '3px 10px', fontSize : '12px', borderRadius : '30px', fontWeight:'normal', float :'right', marginTop : '8px'
                    }}> Edit Profile</a>
                </div>
                <div style={{display : 'flex', flexDirection : 'column'}}>
                    <p style={{fontSize : '17px', fontWeight : '500'}}>Boy Simbolon</p>
                    <small style={{color : 'grey'}}>@boysimbolon</small>
                    <small>Jika kau lapar, Makanlah!</small>
                    <div style={{display : 'flex'}}>
                        <p>103 <span style={{color:'grey'}}>Following</span></p>
                        <p style={{marginLeft : '5px'}}>160 <span style={{color:'grey'}}>Followers</span></p>
                    </div>
                    
                </div>    
            </div>
        </div>
    )
}