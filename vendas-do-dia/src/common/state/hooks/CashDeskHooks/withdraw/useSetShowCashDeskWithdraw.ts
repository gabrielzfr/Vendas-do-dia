import { useSetRecoilState } from "recoil";
import { showCashDeskWithdraw } from "../../../atom";


export function useSetShowCashDeskWithdraw() {
    return useSetRecoilState(showCashDeskWithdraw)

}