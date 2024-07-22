import { Product } from "@/type";
import { create } from "zustand";

interface PreviewModelProps {
    isOpen: boolean;
    data?: Product;
    onOpen: (data: Product) => void;
    onClose: () => void;
}
export const usePreviewModal = create<PreviewModelProps>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data) => { set({ data: data, isOpen:true }) },
    onClose: () => set({ isOpen: false })
}))

