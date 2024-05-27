// import { FaHeart } from "react-icons/fa";
// import { TfiCommentAlt } from "react-icons/tfi";

import CardComponent from "../Card";

export default function CardThread() {
    return(
        // <div style={{display : 'flex', borderTop : '1px solid grey', borderBottom : '1px solid grey', padding : '20px'}}>
        //     <div style={{display : 'flex'}} >
        //         <img src="https://p1.hiclipart.com/preview/323/743/633/icon-person-icon-design-symbol-avatar-silhouette-character-cartoon-head-png-clipart-thumbnail.jpg" alt="img-suggested" style={{width :'35px', height : '35px', borderRadius: '50%', marginRight : '10px'}}/>
        //         <div style={{display : 'flex', flexDirection : 'column'}}>
        //             <div style={{display : 'flex', alignItems : 'center'}}>
        //                 <p style={{fontSize : '13px'}}>Indah Prakarya</p> 
        //                 <small style={{color : 'grey', marginLeft : '5px'}}>@indahpra • 3h</small>
        //             </div>
        //             <div>
        //                 <p style={{fontSize : '13px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum dolorum itaque odit accusantium adipisci ratione excepturi et maxime. Nobis excepturi tempore provident illo non repellendus delectus, nesciunt alias ea modi consequuntur facere odit odio. Eaque debitis, quaerat illo consequatur quos, error dolorum ipsam molestias adipisci impedit pariatur suscipit eligendi.</p>
        //             </div>
        //             <div style={{display : 'flex', marginTop : '10px'}}>
        //                 <div style={{display: 'flex', flexDirection : 'row', alignItems : 'center'}}>
        //                     <FaHeart style={{color : 'red'}}/>
        //                     <small style={{color:'grey', marginLeft : '5px'}}>15</small>
        //                 </div>
        //                 <div style={{display: 'flex', flexDirection : 'row', alignItems : 'center', color:'grey',marginLeft : '20px'}}>
        //                     <TfiCommentAlt />
        //                     <small style={{marginLeft : '5px'}}>35 Replies</small>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <>
           <CardComponent image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCBBgfoO8I5tj-tawrjzeFarrRlxTJeY0K1w&s'} name={'Indah Lestari'} email={'@indahlestari'} post_at={'3h'} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quo rem repellat eligendi accusamus laborum praesentium tenetur, libero ab aperiam, consequuntur unde impedit inventore architecto! Facere vel molestias sint. Voluptatem."} is_like={true} likes_count={40} replies_count={60}/>

           <CardComponent image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqe-ZPlYAqyeO1vTIPVdt8p_ZnMHTzlWnPuA&s'} name={'Mona'} email={'@monariskaa'} post_at={'1h'} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sint recusandae harum similique, ipsam eaque inventore saepe. Autem debitis, ducimus id minus distinctio vitae nobis fugit aspernatur soluta est amet velit, repellat, beatae eaque voluptatum impedit veniam at maiores nihil exercitationem molestiae! Maxime maiores eum nam sequi error consequuntur ea, voluptatum ad omnis harum fugit quae reprehenderit odit, eius velit."} is_like={false} likes_count={20} replies_count={30}/>
            
           <CardComponent image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQKGi9RLSVPjVwzSjr9B2SqJ0c2HFnEhyGg&s'} name={'Kristian David'} email={'@david_kris'} post_at={'6h'} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum suscipit repellat unde eos, nesciunt veritatis itaque, deserunt, vel totam labore? Illum labore vitae voluptates. Fuga optio mollitia molestiae veniam iusto commodi, libero corporis cumque. Vel facilis aperiam iste commodi."} is_like={true} likes_count={25} replies_count={11}/>
            
        </>
    )
}