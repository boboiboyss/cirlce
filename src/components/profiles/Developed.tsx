import { FaGithub, FaLinkedin, FaFacebook, FaInstagram  } from "react-icons/fa";
export default function Developed () {
    return (
        <div style={{display : 'flex', flexDirection : 'column', padding : '15px', backgroundColor : '#0F1010', borderRadius : '8px', marginBottom : '10px'}}>
            <div style={{display : 'flex', alignItems: 'center'}}>
                <p style={{fontSize : '13px', marginRight : '5px'}}>Developed by Boy Simbolon • </p>
                <FaGithub style={{marginRight : '8px'}}/>
                <FaLinkedin style={{marginRight : '8px'}}/>
                <FaFacebook style={{marginRight : '8px'}}/>
                <FaInstagram style={{marginRight : '8px'}} />
            </div>
            <small style={{color : 'grey'}}>Powered by DumbWays Indonesia • #1Coding Bootcamp</small>
        </div>  
    )
}