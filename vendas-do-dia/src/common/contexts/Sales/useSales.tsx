import { FormEvent, useContext, useMemo } from "react"
import { SalesContext } from "./SalesProvider"

export const useSalesContext = () => {
    const {sales, setSales, selectedSale, setSelectedSale} = useContext(SalesContext)

    function deleteSale(id: string) {
        const salesNewArrayFiltered = [...sales].filter(sale => sale.id != id)

        setSales(salesNewArrayFiltered)

        localStorage.setItem('Sales', JSON.stringify(salesNewArrayFiltered))
    }

    async function AddNewSale(saleValue: string, e: FormEvent) {
        e.preventDefault()

        if (Number(saleValue) == 0 || saleValue == '') {
            alert('Digite uma venda válida')
        } else {
            const salesNewArray = [...sales,
             {type: selectedSale, value: Number(saleValue), id: self.crypto.randomUUID()}]

            setSales(salesNewArray)

            localStorage.setItem('Sales', JSON.stringify(salesNewArray))
        }    
    }
    
    const moneySalesTotal = useMemo(() => sales.filter(sale => sale.type == 'Money').reduce((acc, sale) => acc + sale.value, 0), [sales])
    
    const creditSalesTotal = useMemo(() => sales.filter(sale => sale.type == 'CreditCard').reduce((acc, sale) => acc + sale.value, 0), [sales])
    
    const pixSalesTotal = useMemo(() => sales.filter(sale => sale.type == 'Pix').reduce((acc, sale) => acc + sale.value, 0), [sales])

    const salesTotal = useMemo(() => [moneySalesTotal, creditSalesTotal, pixSalesTotal].reduce((acc, saleTotalItem) => acc + saleTotalItem, 0 ), [moneySalesTotal, creditSalesTotal, pixSalesTotal])

    return {
        sales,
        selectedSale,
        setSelectedSale,
        deleteSale,
        AddNewSale,
        moneySalesTotal,
        creditSalesTotal,
        pixSalesTotal,
        salesTotal
    }
}