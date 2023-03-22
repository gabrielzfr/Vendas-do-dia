import { FormEvent } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { SaleType } from "../../types/SaleType"
import { salesState, selectedSaleTypeState } from "../atom"

export function useAddSale() {
    const setSales = useSetRecoilState(salesState)
    const selectedSaleType = useRecoilValue(selectedSaleTypeState)
    return async function AddNewSale(saleValue: string, e: FormEvent) {
        e.preventDefault()

        if (Number(saleValue) == 0 || saleValue == '') {
            alert('Digite uma venda válida')
        } else {
            const newSale = 
             {type: selectedSaleType as SaleType, value: Number(saleValue), id: self.crypto.randomUUID()}

            setSales(sales => [...sales, newSale])

            const localStorageSales = localStorage.getItem('Sales')
            
            const localStorageSalesJson = localStorageSales ? JSON.parse(localStorageSales) : []


            localStorage.setItem('Sales', JSON.stringify([...localStorageSalesJson, newSale]))
        }    
    }
}