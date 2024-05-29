// import { useThreads } from "../hooks/useThreads"
// import { ICard } from "../types/types"
import { useEffect, useState } from "react"
import { api } from "../libs/api"

export default function Coba () {
    // const {data } = useThreads()
    // console.log(data)

    type IPost = {
        title : string, 
        description : string,
        image : string
    }

    const [post, setPost ] = useState<IPost[]>([])

    async function getPost(){
        const response = await api.get('/');
        setPost(response.data)
    }

    useEffect(() => {
        getPost()
    }, []);


    return (
        <div>
            {
                post?.map(item => {
                    return (
                        <div>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <img src={item.image} />
                        </div>
                    )
                })
            }
        </div>
    )
}