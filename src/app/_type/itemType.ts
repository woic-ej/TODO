export type PostItemType = {
  name: string;
};

export type GetItemType = {
  id: number;
  name: string;
  isCompleted: boolean;
};

export type UpdateItemRequestType = {
  name?: string;
  memo?: string;
  imageUrl?: string;
  isCompleted?: boolean;
};

export type ItemResponseType = {
  isCompleted: boolean;
  imageUrl: string;
  memo: string;
  name: string;
  tenantId: string;
  id: number;
};
