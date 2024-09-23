//배송지 목록 조회
export interface deliveryListResponse {
  message: string;
  code: number;
  data: deliveryDataType[];
}

export interface deliveryDataType {
  receiverName: string;
  receiverLocation: number;
  phone: string;
  receiverAddress: string;
}

export interface shippingAddressType {
  addressId: number;
  address: string;
  addressDetail: string;
  zipCode: string;
  receiverName: string;
  receiverPhone: string;
  isDefault: boolean;
}
