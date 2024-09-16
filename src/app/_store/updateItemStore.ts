import { create } from "zustand";
import { UpdateItemRequestType } from "@/app/_type/itemType";

interface updateItemState {
  updateItem: UpdateItemRequestType;
  setUpdateItem: (item: UpdateItemRequestType) => void;
  clear: () => void;
}

const useUpdateItemStore = create<updateItemState>((set) => ({
  updateItem: {},
  setUpdateItem: (item) => set(() => ({ updateItem: item })),
  clear: () => set({}),
}));

export default useUpdateItemStore;
