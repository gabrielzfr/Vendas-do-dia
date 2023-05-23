import { useRecoilValue } from "recoil";
import { CashDeskState } from "../../../atom";

export function useCashdeskValue() {
    return useRecoilValue(CashDeskState)
}