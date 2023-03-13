import { useMemo } from "react";
import { selector } from "recoil";
import { salesState } from "../atom";

export const totalSalesState = selector({
    key: "totalState",
    get: ({get}) => {
        const sales = get(salesState)

        const moneySalesTotal = sales.filter(sale => sale.type == 'Money').reduce((acc, sale) => acc + sale.value, 0)
    
        const creditSalesTotal = sales.filter(sale => sale.type == 'CreditCard').reduce((acc, sale) => acc + sale.value, 0)
    
        const pixSalesTotal = sales.filter(sale => sale.type == 'Pix').reduce((acc, sale) => acc + sale.value, 0)

        const totalSales = [moneySalesTotal, creditSalesTotal, pixSalesTotal].reduce((acc, saleTotalItem) => acc + saleTotalItem, 0)

        return {
            moneySalesTotal,
            creditSalesTotal,
            pixSalesTotal,
            totalSales
        }

    }
})

/*

    const moneySalesTotal = useMemo(() => sales.filter(sale => sale.type == 'Money').reduce((acc, sale) => acc + sale.value, 0), [sales])
    
    const creditSalesTotal = useMemo(() => sales.filter(sale => sale.type == 'CreditCard').reduce((acc, sale) => acc + sale.value, 0), [sales])
    
    const pixSalesTotal = useMemo(() => sales.filter(sale => sale.type == 'Pix').reduce((acc, sale) => acc + sale.value, 0), [sales])

    const salesTotal = useMemo(() => [moneySalesTotal, creditSalesTotal, pixSalesTotal].reduce((acc, saleTotalItem) => acc + saleTotalItem, 0 ), [moneySalesTotal, creditSalesTotal, pixSalesTotal])

*/ 