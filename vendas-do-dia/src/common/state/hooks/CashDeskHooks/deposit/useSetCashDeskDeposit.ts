import { useSetRecoilState } from "recoil";
import { cashDeskDeposit, cashDeskWithdraw } from "../../../atom";

export function useSetCashDeskDeposit() {
    const setDepositState =  useSetRecoilState(cashDeskDeposit)

    return (depositValue: number) => {
        localStorage.setItem('Deposit', JSON.stringify(depositValue))

        setDepositState(depositValue)
    }
}