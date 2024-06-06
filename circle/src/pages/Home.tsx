// import { useDispatch, useSelector } from "react-redux"
import { SideBarLeft } from "../components/SideBarLeft"
import { SideBarRight } from "../components/SideBarRight"
import Thread from "../components/Thread"
// import { RootState } from "@/redux/store/store"
// import { SET_USER } from "@/redux/slices/AuthSlices"
// import { useEffect } from "react"


export default function Home () {
    // const currentUser = useSelector((state : RootState) => state.auth.user)
    // console.log(currentUser)
    // const dispatch = useDispatch();

    // async function onLogin(){
    //     dispatch(SET_USER({
    //         username : 'Megi',
    //         fullName : 'Megi Kurniawan',
    //         email : 'megi@gmail.com',
    //         bio : 'Just Do It!',
    //         photoProfile : 'megi.jpg'

    //     }))
    // }

    // useEffect(() => {
    //     onLogin()
    // }, [])

    return (
        <div style={{
                color : 'white', 
                display : 'flex', 
                flexDirection : 'row',
                background: 'black'}}>
            <SideBarLeft />
            <Thread />
            <SideBarRight />            
        </div>
    )
}