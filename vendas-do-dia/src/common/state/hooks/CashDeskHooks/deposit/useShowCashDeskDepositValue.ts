import { useRecoilValue } from "recoil";
import { showCashDeskDeposit } from "../../../atom";

export function useShowCashDeskDepositValue() {
    return useRecoilValue(showCashDeskDeposit)

}