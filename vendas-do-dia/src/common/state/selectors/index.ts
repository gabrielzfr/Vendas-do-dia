import { useMemo } from "react";
import { selector } from "recoil";
import { salesState } from "../atom";

export const totalSalesState = selector({
    key: "totalState",
    get: ({get}) => {
        const sales = get(salesState)

        const totalMoneySales = sales.filter(sale => sale.type == 'Money').reduce((acc, sale) => acc + sale.value, 0)
    
        const totalCreditSales = sales.filter(sale => sale.type == 'CreditCard').reduce((acc, sale) => acc + sale.value, 0)
    
        const totalPixSales = sales.filter(sale => sale.type == 'Pix').reduce((acc, sale) => acc + sale.value, 0)

        const totalSales = totalMoneySales + totalCreditSales + totalPixSales

        const totalCashdesk = totalMoneySales + 50

        return {
            totalMoneySales,
            totalCreditSales,
            totalPixSales,
            totalSales,
            totalCashdesk
        }

    }
})