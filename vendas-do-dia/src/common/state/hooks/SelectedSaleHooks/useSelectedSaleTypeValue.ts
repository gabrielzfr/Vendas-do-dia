import { useRecoilValue} from "recoil";
import { selectedSaleTypeState } from "../../atom";

export function useSelectedSaleTypeValue() {
    return useRecoilValue(selectedSaleTypeState)

}