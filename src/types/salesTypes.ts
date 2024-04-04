export type TSales = {
  productId: string;
  buyerName: string;
  quantity: number;
  quantityHistory: number;
};

export type TSaleModalData = {
  productId: string;
  quantityHistory: number;
};

export type TSaleModal = {
  saleModalData: TSaleModalData;
  setSaleModalData: (data: TSaleModalData) => void;
};

export type TSaleParam = "1" | "2" | "3" | "4";
export type TSaleParamStateF = {
  saleParam: TSaleParam;
  setSaleParam: (data: TSaleParam) => void;
};
