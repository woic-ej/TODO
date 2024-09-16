import { create } from "zustand";
import { UpdateItemRequestType } from "@/app/_type/itemType";

interface updateItemState {
  updateItem: UpdateItemRequestType;
  setUpdateItem: (item: UpdateItemRequestType) => void;
  clear: () => void;
}

// 수정 된 item 데이터
const useUpdateItemStore = create<updateItemState>((set) => ({
  updateItem: {},
  setUpdateItem: (item) => set(() => ({ updateItem: item })),
  clear: () => set({ updateItem: {} }),
}));

export default useUpdateItemStore;
