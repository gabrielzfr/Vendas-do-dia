import { useRecoilState, useSetRecoilState } from "recoil";
import { showCashDeskDeposit } from "../../../atom";



export function useSetShowCashDeskDeposit() {
    return useSetRecoilState(showCashDeskDeposit)

}