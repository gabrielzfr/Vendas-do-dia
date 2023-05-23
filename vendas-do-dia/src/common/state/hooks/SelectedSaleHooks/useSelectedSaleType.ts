import { useRecoilState} from "recoil";
import { selectedSaleTypeState } from "../../atom";

export function useSelectedSaleType() {
    return useRecoilState(selectedSaleTypeState)

}