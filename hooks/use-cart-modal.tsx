import { Product } from "@/type";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
interface CartModalProps {
    items: Product[]; //yeh wo items hain jo cart ma hongi.
    addItem: (data: Product) => void; //iss func ka through item cart ma add hogi and agr already item exist krti hogi toh "item" walay array ma add nhi hogi.
    removeItem: (id: string) => void; //yeh specific item ko remove krnay ka liya func hai.
    removeAll: () => void //yeh sab item ko "items" array ma say delete krnay ka liya func hai.
}
export const useCartModal = create( //ab yaha create ma direct persist ka function use kreinga.

    // Now ab yeh persist kya hai?
    //The Persist middleware enables you to store your Zustand state in a storage (e.g., localStorage, AsyncStorage, IndexedDB, etc.), thus persisting its data.
    // in simple word "persist" humay allow krta haka hum jo apni zustand store ki state hai usko localStorage,asyncStorage etc ma store krskta hai.
    // https://docs.pmnd.rs/zustand/integrations/persisting-store-data

    persist<CartModalProps>((set, get) => ({ //yeh basically 1st parameter ma callBack func leta hai jo two argument deta hai "set" & "get".

    // ab jo set hai its a func for update and "get" is a func to get something from the type we pass to it like yaha humna "CartModalProps" pass kiya hain toh ab uski base pa jo jo properties humna usme define ki hain wo "get" ka through access krsktay hain.

        items: [], //initially empty rakha hai.
        addItem: (data: Product) => {
            const currentItems = get().items; //yaha basic item array ko get kr rhay hain.

            const existingItem = currentItems.find((item) => data.id === item.id); //yaha yeh check kr rhay hain kay jo item abhi add kr rhay hain wo already "items" array ma hai ya nhi.

            if (existingItem) { //or agr wo exist krti hogi toh ek msg return krdeinga.
                return toast("Item already exist in cart.")
            }

            set({ //else "set" ka through "items" array ko set kreinga jisme jo already item hain wo spread krdia and jo new "data" or new item hai wo add krdia.
                items: [...get().items, data],
            })

            toast.success('Item added'); //its a success msg.
        },
        removeItem: (id) => {
            set({ items: [...get().items.filter((item) => item.id !== id)] }) //yaha pehla jo "items" array hai wo access kia using .get and then uspa filter appply krdia or kiu kay "filter" be ek new array hi return krta hai toh iss lia usko wohi pa spread be krdia.

            toast.success('Item removed')
        }, 
        removeAll: () => set({ items: [] }), //or yaha array ko empty set krdia.
    }), { //or yeh 2nd parameter hai "persist" may which is neccessary.
        name: 'cart-storage', //acha ab yeh jo name hai yeh bht important hai kiu kay yehi name jab humara zustand store save hoga localStorage ma toh as a key hogi.so it should be unique.
        storage: createJSONStorage(() => localStorage) //or yaha humna createJSONStorage walay func kay through yeh define krdia kay kis storage ma save krna hai which is "localStorage" in our case.
    })

)