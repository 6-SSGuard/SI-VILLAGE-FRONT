import AuthServiceHeader from '@/components/layouts/AuthServiceHeader'
import React from 'react'

export default function layout(
    {children}: Readonly<{children: React.ReactNode}>
) {
  return (
   <>
    <AuthServiceHeader />
   {children}
   </>
  )
}
