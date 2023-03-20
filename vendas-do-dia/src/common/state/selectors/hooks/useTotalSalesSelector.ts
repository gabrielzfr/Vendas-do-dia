import { useRecoilValue } from "recoil";
import { totalSalesState } from "..";

export function useTotalSalesSelector() {
    const {totalMoneySales, totalCreditSales, totalPixSales, totalSales, totalCashdesk} = useRecoilValue(totalSalesState)
    
    return {
        totalMoneySales,
        totalCreditSales,
        totalPixSales, 
        totalSales,
        totalCashdesk
    }
    
}