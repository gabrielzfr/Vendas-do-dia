import { useRecoilValue } from "recoil";
import { totalSalesState } from "..";

export function useTotalSalesSelector() {
    const {moneySalesTotal, creditSalesTotal, pixSalesTotal, totalSales} = useRecoilValue(totalSalesState)

    return {
        moneySalesTotal,
        creditSalesTotal,
        pixSalesTotal, 
        totalSales
    }
    
}