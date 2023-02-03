import React, { createContext, ReactNode, useState } from 'react'
import { SalesType } from '../../types/SalesType'
import { SaleType } from '../../types/SaleType'

interface SalesProviderProps {
    children: ReactNode
}

interface SalesContextProps {
    sales: SalesType
    setSales: React.Dispatch<React.SetStateAction<SalesType>>
    selectedSale: SaleType
    setSelectedSale: React.Dispatch<React.SetStateAction<SaleType>>
  
}

const localStorageSales = localStorage.getItem('Sales')

const initialValue = {
    sales: localStorageSales ? JSON.parse(localStorageSales) : [],
    setSales: () => {},
    selectedSale: "Money" as SaleType,
    setSelectedSale: () => {}
}

export const SalesContext = createContext<SalesContextProps>(initialValue)

SalesContext.displayName = "Sales"


export const SalesProvider = ({children}: SalesProviderProps) => {
    const [sales, setSales] = useState(initialValue.sales)
    const [selectedSale, setSelectedSale] = useState<SaleType>(initialValue.selectedSale)

    return (
        <SalesContext.Provider value={{sales, setSales, selectedSale, setSelectedSale: setSelectedSale}}>
            {children}
        </SalesContext.Provider>
    )
}

