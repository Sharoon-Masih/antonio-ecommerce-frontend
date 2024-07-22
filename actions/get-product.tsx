import { Billboard, Product } from "@/type"
import qs from 'query-string'

const Url = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProduct = async (query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({ //Acha ab basic yeh jo query-string ka package hna yeh humay allow krta haka agr koio Url hai usko simply get krna hai wobi krsktay hain esily, agr kisi url ma query string mtlb kay searchParameter add krnay hain wo bi hosktay hain, and agr koi Url create krna hai jis me base Url ka sth sth query parametr be hon toh wobi hoskta hai.yaha par hum stringifyUrl ka method use kr rhay hain it will convert inn Url and if want again in simple form to parseUrl url to this methodd.
        url: Url, //here passing Url
        query: { //or yeh saray query parameter hain jo Url ma show hongay,but yeh sub optional hain wo iss lia bcuz koi queryParamter null hoga and kisi ma kuch query hogi iss lia byDefault sb ko optional krdia.  
            categoryId: query.categoryId,
            colorId: query.colorId,
            sizeId: query.sizeId,
            isFeatured: query.isFeatured
        }
    })
    const res = await fetch(`${url}`) //or iss Url pa hum request kr rhay hain basically apni API endpoint pa jo humna products ka lia create ki hai.

    return res.json()
}

export default getProduct;