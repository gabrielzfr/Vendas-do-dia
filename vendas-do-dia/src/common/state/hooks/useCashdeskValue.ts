import { useRecoilValue } from "recoil";
import { CashDeskState } from "../atom";

export function useCashdeskValue() {
    const cashdeskValue = useRecoilValue(CashDeskState)
    
    return cashdeskValue
}