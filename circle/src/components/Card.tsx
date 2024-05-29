// import {Box, Image, Text} from '@chakra-ui/react'
import { FaHeart } from "react-icons/fa";
import { TfiCommentAlt } from "react-icons/tfi";
import { ICard } from "../types/types";


export default function CardComponent (props : ICard) {
    const {name, email, post_at, content, replies_count, image, likes_count, is_like} = props;
    return (
        <div style={{display : 'flex',  borderBottom : '1px solid grey', padding : '20px'}}>
        <div style={{display : 'flex'}} >
            <img src={image} alt="img-suggested" style={{width :'35px', height : '35px', borderRadius: '50%', marginRight : '10px'}}/>
            <div style={{display : 'flex', flexDirection : 'column'}}>
                <div style={{display : 'flex', alignItems : 'center'}}>
                    <p style={{fontSize : '13px'}}>{name}</p> 
                    <small style={{color : 'grey' , marginLeft : '5px'}}>{email} • {post_at}</small>
                </div>
                <div>
                    <p style={{fontSize : '13px'}}>{content}</p>
                </div>
                <div style={{display : 'flex', marginTop : '10px'}}>
                    <div style={{display: 'flex', flexDirection : 'row', alignItems : 'center'}}>
                        <FaHeart style={{color : is_like ? 'red' : ''}}/>
                        <small style={{color: 'grey', marginLeft : '5px'}}>{likes_count}</small>
                    </div>
                    <div style={{display: 'flex', flexDirection : 'row', alignItems : 'center', color:'grey',marginLeft : '20px'}}>
                        <TfiCommentAlt />
                        <small style={{marginLeft : '5px'}}>{replies_count} Replies</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
