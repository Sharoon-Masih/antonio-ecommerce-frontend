import { Product } from "@/type"

const Url = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getSingleProduct = async (id:string): Promise<Product> => {

    const res = await fetch(`${Url}/${id}`,{next:{revalidate:60}}) 

    return res.json()
}

export default getSingleProduct;