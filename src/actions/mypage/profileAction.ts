/**
 * 뷰티 정보 조회
 * @remarks
 * GET 요청을 '/api/beauty-info' 엔드포인트에 보냅니다. 성공시 메시지와 result를 반환합니다.
 * @returns {Promise<authResponse>} "Success." 메시지와 함께 을 반환합니다.
 */
// export async function getTopCategories(): Promise<> {
//   return fetchData<>(`${process.env.API_BASE_URL}/api/beauty-info`);
// }

// export async function getBeautyInfo() {
//   const session = await getServerSession(options);
//   // console.log(session?.user.accessToken);
//   try {
//     const res = await fetch(`${process.env.API_BASE_URL}/api/beauty-info`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${session?.user.accessToken}`,
//       },
//     });

//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }

//     return await res.json();
//   } catch (error) {
//     console.error('Failed to fetch beauty info:', error);
//     return null;
//   }
// }
