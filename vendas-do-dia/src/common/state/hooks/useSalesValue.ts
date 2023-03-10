import { useRecoilValue } from "recoil";
import { salesState } from "../atom";

export function useSalesValue() {
    const sales = useRecoilValue(salesState)
    return sales
}