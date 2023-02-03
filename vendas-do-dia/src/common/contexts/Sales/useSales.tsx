import { FormEvent, useContext } from "react"
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
    
    const moneySalesTotal = sales.filter(sale => sale.type == 'Money').reduce((acc, sale) => acc + sale.value, 0)
    
    const creditSalesTotal = sales.filter(sale => sale.type == 'CreditCard').reduce((acc, sale) => acc + sale.value, 0)
    
    const pixSalesTotal = sales.filter(sale => sale.type == 'Pix').reduce((acc, sale) => acc + sale.value, 0)

    const salesTotal = [moneySalesTotal, creditSalesTotal, pixSalesTotal].reduce((acc, saleTotalItem) => acc + saleTotalItem, 0 )

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