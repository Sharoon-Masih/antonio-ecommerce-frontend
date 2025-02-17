import { Size } from "@/type"

const URL =  `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSize = async ():Promise<Size[]> => {
    
        const res = await fetch(URL)
        
        return res.json()
  
} 

export default getSize;