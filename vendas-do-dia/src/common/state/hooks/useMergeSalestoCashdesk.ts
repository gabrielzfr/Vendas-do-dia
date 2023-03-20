import { useSetRecoilState } from "recoil";
import { CashDeskState } from "../atom";
import { useMoneyTotalSalesValue } from "../selectors/hooks/useMoneyTotalSalesValue";

export function useMergeSalestoCashdesk() {
    const moneySales = useMoneyTotalSalesValue()
    const setCashdeskValue = useSetRecoilState(CashDeskState)
    const localStorageCashdesk = localStorage.getItem('Cashdesk')
    const localStorageCashdeskJSON = localStorageCashdesk ? JSON.parse(localStorageCashdesk) : 0


    return () => {
        localStorage.setItem('Cashdesk', 
            JSON.stringify(localStorageCashdeskJSON + moneySales)
        )
        setCashdeskValue(cashdesk => cashdesk + moneySales)
    }

}