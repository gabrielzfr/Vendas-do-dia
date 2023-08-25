import { useSetCashdeskValue } from "../cashdesk/useSetCashdeskValue";
import { useSetCashDeskDeposit } from "../deposit/useSetCashDeskDeposit";
import { useSetCashDeskWithdraw } from "../withdraw/useSetCashDeskWithdraw";

export function useCloseCashdesk() {
    const setCashdesk = useSetCashdeskValue()
    const setCashdeskWithdraw = useSetCashDeskWithdraw()
    const setCashdeskDeposit = useSetCashDeskDeposit()

    return (cashdeskTotalValue: number) => {

        setCashdesk(cashdeskTotalValue)
    
        setCashdeskDeposit(0)
    
        setCashdeskWithdraw(0)
    }

}