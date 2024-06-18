import { FaArrowLeftLong } from "react-icons/fa6";
// import FormStatus from "../components/threads/FormStatus";
import CardComponent from "../components/Card";
import CardDetailComponent from "../components/CardDetail";
import {Link} from 'react-router-dom'

export default function DetailPost () {
    return (
        <div style={{width : '700px', display : 'flex', flexDirection : 'column', borderRight : '1px solid grey', borderLeft : '1px solid grey'}}>

        <Link to={'/'}>
            <div style={{display : 'flex', padding : '15px', alignItems : 'center'}}>
                <FaArrowLeftLong style={{fontSize: '25px', marginRight : '8px'}}/>
                <p style={{fontSize:'20px', fontWeight:'600', marginBottom : '5px'}}>Status</p>
            </div>
        </Link>
        
        <CardDetailComponent image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCBBgfoO8I5tj-tawrjzeFarrRlxTJeY0K1w&s'} name={'Indah Lestari'} email={'@indahlestari'} post_at={'11:32 PM • Jul 26, 2023 '} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quo rem repellat eligendi accusamus laborum praesentium tenetur, libero ab aperiam, consequuntur unde impedit inventore architecto! Facere vel molestias sint. Voluptatem."} is_like={true} likes_count={40} replies_count={60}/>

        {/* <FormStatus placeholder={"Type your reply!"} color={"grey"} reply={"Reply"}/> */}
        <CardComponent image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqe-ZPlYAqyeO1vTIPVdt8p_ZnMHTzlWnPuA&s'} name={'Mona'} email={'@monariskaa'} post_at={'1h'} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sint recusandae harum similique, ipsam eaque inventore saepe. Autem debitis, ducimus id minus distinctio vitae nobis fugit aspernatur soluta est amet velit, repellat, beatae eaque voluptatum impedit veniam at maiores nihil exercitationem molestiae! Maxime maiores eum nam sequi error consequuntur ea, voluptatum ad omnis harum fugit quae reprehenderit odit, eius velit."} is_like={false} likes_count={20} replies_count={30}/>
        
       <CardComponent image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQKGi9RLSVPjVwzSjr9B2SqJ0c2HFnEhyGg&s'} name={'Kristian David'} email={'@david_kris'} post_at={'6h'} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum suscipit repellat unde eos, nesciunt veritatis itaque, deserunt, vel totam labore? Illum labore vitae voluptates. Fuga optio mollitia molestiae veniam iusto commodi, libero corporis cumque. Vel facilis aperiam iste commodi."} is_like={true} likes_count={25} replies_count={11}/>
    </div>
    )
}