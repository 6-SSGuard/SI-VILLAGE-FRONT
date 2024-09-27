export interface CartProductListType {
  data: CartProductDataType[];
}

export interface CartProductDataType {
  id: number;
  Product_title: string;
  Product_content: string;
  Product_image: string;
  Product_infoDatail: string;
  Product_Price: number;
  Product_choiceNum: number;
}

export interface cartMenuType {
  id: number;
  name: string;
  link: string;
}

export interface cartItemType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  isChecked: boolean;
}
