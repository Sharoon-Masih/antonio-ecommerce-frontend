import { Category } from "@/type"

const URL =  `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategory = async ():Promise<Category[]> => {
    
        const res = await fetch(URL)
        
        return res.json()
  
} 

export default getCategory;