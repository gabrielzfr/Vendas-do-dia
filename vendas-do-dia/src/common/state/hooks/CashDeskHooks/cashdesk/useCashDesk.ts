import { CashDeskState } from "../../../atom";
import { useRecoilState } from "recoil";

export function useCashDesk() {
    return  useRecoilState(CashDeskState)
}