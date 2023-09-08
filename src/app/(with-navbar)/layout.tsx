import NavBar from '@/components/NavBar/NavBar'
import React from 'react'




export default async function layout({ children }: { children: React.ReactNode }) {
 
  return (
    <div>
         <NavBar /> 
        { children }
    </div>
  )
}
