import { useRecoilValue } from "recoil";
import { salesState } from "../../atom";

export function useSalesValue() {
    return useRecoilValue(salesState)
}