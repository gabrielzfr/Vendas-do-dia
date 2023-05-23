import { useRecoilValue, useSetRecoilState } from "recoil";
import { showCashDeskWithdraw } from "../../../atom";


export function useShowCashDeskWithdrawValue() {
    return useRecoilValue(showCashDeskWithdraw)

}