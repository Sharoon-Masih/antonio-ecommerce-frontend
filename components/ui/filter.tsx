'use client'
import { Size } from '@/type';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { FC } from 'react'
import qs from 'query-string'
import Button from './button';
import { cn } from '@/lib/utils';

interface filterProps {
    name: string;
    valueKey: string;
    data: Size[];
    btnColor?: boolean
}
const Filter: FC<filterProps> = ({ data, name, valueKey, btnColor }) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const selectedValue = searchParams.get(valueKey);

    const onClick = (id: string) => {

        const current = qs.parse(searchParams.toString()) //acha ab yaha basically jo Url ma serachParams mil rhay hain wo "qs" library ko pass kiya and it will them in simple form in object form like ?sizeId=40&page=1 and return "current" obj as {sizeId:40 , page:1}

        const query = { //yeh ek new query object create kia.
            ...current, //iss object ma jo current obj hai usko spread operator ka through spread krdia which means kay ab ab usme jitni be properties hongi wo sb ajagi query obj may.
            [valueKey]: id //or yeh basic index signature hai its mean that kay jo "valuekey" prop ma get ho rhi hai wo as a key set hogi like colorId and jo "id" paramter ma get ho rhi hai wo as a value set hojayegi.
        }

        if (current[valueKey] === id) { //now yaha par basic we are checking that kay jo valueKey hai kya uski value and jo "id" mil rhi hai when user is clicking same hai ya nhi. like let say kay jo valueKey hai wo hai "sizeId" so it will be like this current["sizeId"] ab iska against jo be value hai usko compare kreinga "id" say.
            query[valueKey] = null //Now agr above condition true hojati hai toh jo query object hai usme say uss valueKey ki value null hojayegi, Ab flow iss tarah sa haka jo current obj hai usmay jitnay be search parameters hain wo current Url kay hain mtlb kay current Url ma jo searchParameter hain wohi current obj mabi hain.toh ab uper isi lia yeh check kia kay agr current Url ma valueKey hai toh uski jo value kya wo same hai uss value/id say jo as a parameter get ho rhi hai onClick func may.agr same hain toh iska mtlb yeh haka user na again same hi "size" pa click kia hai toh which means that kay dubara query krnay ki zarorat nhi kiu kay size same hi hai isi lia query obj may say valueKey ko null krdia which means kay   
        }

        const Url = qs.stringifyUrl({ //Now finally .stringifyUrl ka through Url create kreinga.
            url: window.location.href, //it return the current Url that we passing to the "url".
            query: query, //isme jo uper query object hai wo assign kia hai taka jo be query hon wobi Url ma add hojaye.
        },
            {
                skipNull: true //or iska mtlb yeh haka jis be queryParameter/valueKey ki value null ho usko skip krdo mtlb kay usko url ma show na kro.like A/c to above condition at line 27 agr valueKey ki value null hogi query obj may toh wo wali valueKey ko skip krdega.
            })

        router.push(Url, { scroll: false }); //finally ab yeh Url ko router push krdega which means jo base Url hai wo toh same hi rahega bs usma query parameters add hojayega, like this: http//localhost:3000/category/[categoryId]?query=value
    }

    return (
        <div className='mb-8'>
            <h3 className='text-lg font-semibold'>{name}</h3>
            <hr className='my-6' />
            <div className=' flex items-center gap-3 flex-wrap'>
                {data.map((filter) =>
                    <Button
                        className={cn('rounded-md bg-white border-2 border-gray-300 text-gray-900 py-2',
                             selectedValue === filter.id && 'font-bold border-gray-900',
                            name === "Colors" && selectedValue === filter.id && btnColor && 'text-gray-500'
                        )}
                        style={{ backgroundColor: selectedValue === filter.id && btnColor ? filter.value : 'white' }}
                        onClick={() => { onClick(filter.id) }} 
                        key={filter.id}>
                        {filter.name}
                    </Button>)}
            </div>

        </div>
    )
}

export default Filter
