import { useSetRecoilState } from "recoil";
import { cashDeskWithdraw } from "../../../atom";

export function useSetCashDeskWithdraw() {
    const setWithdrawState =  useSetRecoilState(cashDeskWithdraw)
    return (withdrawValue: number) => {
        setWithdrawState(withdrawValue)

        localStorage.setItem('Withdraw', JSON.stringify(withdrawValue))
    }
}