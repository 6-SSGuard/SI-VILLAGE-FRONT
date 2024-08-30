// 'use server'

// import { SignUpRequestType } from "@/types/RequestTypes"

// export async function signUpAction(signUpFormData: FormData) {
//   const payload: SignUpRequestType = {
//     email: signUpFormData.get('email') as string,
//     password: signUpFormData.get('password') as string,
//     name: signUpFormData.get('name') as string,
//     phoneNumber: signUpFormData.get('phoneNumber') as string,
//     nickname: signUpFormData.get('nickname') as string,
//     birth: signUpFormData.get('birth') as string,
//     address: signUpFormData.get('address') as string,
//     gender: signUpFormData.get('gender') as "남성" | "여성" | "기타"
//   }
//   console.log("action payload",payload)
//   const res = await fetch(`${process.env.API_BASE_URL}/api/v1/auth/sign-up`, {
//     method: 'POST',
//     body: JSON.stringify(
//       payload
//     ),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })

//   console.log(res)
//   if (res.ok) {
//     return await res.json()
//   }
//   return null
// }
