import React, { createContext, ReactNode, useState } from 'react'
import { SalesType } from '../../types/SalesType'

interface SalesProviderProps {
    children: ReactNode
}

interface SalesContextProps {
    sales: SalesType
    setSales: React.Dispatch<React.SetStateAction<SalesType>>
  
}

const localStorageSales = localStorage.getItem('Sales')

const initialValue = {
    sales: localStorageSales ? JSON.parse(localStorageSales) : [],
    setSales: () => {}
}

export const SalesContext = createContext<SalesContextProps>(initialValue)

SalesContext.displayName = "Sales"


export const SalesProvider = ({children}: SalesProviderProps) => {
    const [sales, setSales] = useState(initialValue.sales)

    return (
        <SalesContext.Provider value={{sales, setSales}}>
            {children}
        </SalesContext.Provider>
    )
}

