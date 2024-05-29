import CardThread from "./threads/CardThread"
import FormStatus from "./threads/FormStatus"

export default function Thread () {
    return (
        <div style={{width : '700px', display : 'flex', flexDirection : 'column', borderRight : '1px solid grey', borderLeft : '1px solid grey'}}>
            <p style={{fontSize:'20px', fontWeight:'600', marginBottom : '5px', margin: '20px'}}>Home</p>
            <FormStatus placeholder={'What is happening?!'} color={'green'} reply={"Post"}/>
            <CardThread />
        </div>
    )
}