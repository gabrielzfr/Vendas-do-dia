import { useRecoilValue } from "recoil";
import { totalSalesState } from "..";

export function useTotalSalesSelector() {
    const {totalMoneySales, totalCreditCardSales, totalPixSales, totalSales} = useRecoilValue(totalSalesState)

    return {
        totalMoneySales,
        totalCreditCardSales,
        totalPixSales, 
        totalSales
    }
    
}