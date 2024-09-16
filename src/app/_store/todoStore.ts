import { create } from "zustand";
import { GetItemType } from "@/app/_type/itemType";

interface TodoState {
  listData: GetItemType[];
  setListData: (list: GetItemType[]) => void;
}

// 할 일 목록을 조회한 데이터
const useTodoStore = create<TodoState>((set) => ({
  listData: [],
  setListData: (list) => set(() => ({ listData: list })),
}));

export default useTodoStore;
