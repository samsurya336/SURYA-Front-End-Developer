import { Context, createContext } from 'react'



export const CurrentSectionContext:Context<any> = createContext<{toggleSection:()=> void }>({toggleSection:()=>{}})
export const CurrentSectionProvider = CurrentSectionContext.Provider;