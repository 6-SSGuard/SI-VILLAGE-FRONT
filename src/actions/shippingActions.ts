// import { commonResType } from "@/types/auth/authType";
// import { shippingAddressType } from "@/types/delivery/deliveryType";

// export const getShippingAddress = async (): Promise<
//   shippingAddressType[] | null
// > => {
//   'use server';

//   // fetch shipping address data
//   const res: commonResType<shippingAddressType[] | null> = await fetch(
//     'http://localhost:3000/api/shippingAddress',
//     {
//       next: { tags: ['shippingAddress'] },
//     }
//   );
//   if (res.httpStatus !== 'ok') {
//     return null;
//   }
//   const data: shippingAddressType[] = (await res.result) as shippingAddressType[];
//   return data;
// };
