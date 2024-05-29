import { LuImagePlus } from "react-icons/lu";

export default function FormStatus({placeholder, color, reply} : {placeholder : string, color : string, reply : string}) {
    return (
        <div style={{display : 'flex', alignItems : 'center', padding : '20px', borderBottom : '1px solid grey'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOs9pBGGQuGe0JKeFg1XegK87RXxs1mIHyyg&s" alt="img-suggested" style={{width :'35px', height : '35px', borderRadius: '50%'}}/>
            <input placeholder={placeholder} style={{background : 'transparent', width: '100%', textAlign : 'left', marginLeft : '10px'}}></input>
            <LuImagePlus style={{marginRight : '10px', color : color, fontSize : '30px'}} />
            <button style={{marginRight : '10px', backgroundColor : 'green', padding : '1px 10px', borderRadius : '15px'}}>{reply}</button>

        </div>
    )
}