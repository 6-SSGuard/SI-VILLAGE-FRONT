import { redirect } from 'next/navigation';
import React from 'react';

function page() {
  redirect('/categories/all');
  return <></>;
}

export default page;
