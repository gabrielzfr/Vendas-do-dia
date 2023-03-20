import { useRecoilValue } from "recoil";
import { totalSalesState } from "..";

export function useMoneyTotalSalesValue() {
    const totalSales = useRecoilValue(totalSalesState)
    
    return totalSales.totalMoneySales
}