import { useRecoilValue } from "recoil";
import { cashDeskWithdraw } from "../../../atom";

export function useCashDeskWithdrawValue() {
    return useRecoilValue(cashDeskWithdraw)
}