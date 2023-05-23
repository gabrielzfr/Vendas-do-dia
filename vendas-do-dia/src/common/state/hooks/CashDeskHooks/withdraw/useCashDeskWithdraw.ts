import { cashDeskWithdraw } from "../../../atom";
import { useRecoilState } from "recoil";

export function useCashDeskWithdraw() {
    return useRecoilState(cashDeskWithdraw)
}