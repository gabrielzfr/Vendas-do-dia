import { cashDeskDeposit } from "../../../atom";
import { useRecoilState } from "recoil";

export function useCashDeskDeposit() {
    return useRecoilState(cashDeskDeposit)
}