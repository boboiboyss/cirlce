import { api } from "@/libs/api"

export function useFollow(id : number){

   async function followed(){
    try{
        const response = await api.post(`/following/${id}`,{},
            {
                headers : {
                    Authorization : `Bearer ${localStorage.token}`
                }
            });
        return response.data
    } catch (error) {
        console.log(error)
    }
   }

   return {followed}
} 