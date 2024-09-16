import { create } from "zustand";
import { GetItemType } from "@/app/_type/itemType";

interface TodoState {
  listData: GetItemType[];
  setListData: (list: GetItemType[]) => void;
}

const useTodoStore = create<TodoState>((set) => ({
  listData: [],
  setListData: (list) => set(() => ({ listData: list })),
}));

export default useTodoStore;
