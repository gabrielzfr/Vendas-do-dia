import { cashDeskDeposit } from "../../../atom";
import { useRecoilValue } from "recoil";

export function useCashDeskDepositValue() {
    return useRecoilValue(cashDeskDeposit)
}