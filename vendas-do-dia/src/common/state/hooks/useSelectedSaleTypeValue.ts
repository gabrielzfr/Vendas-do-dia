import { useRecoilState} from "recoil";
import { selectedSaleTypeState } from "../atom";

export function useSelectedSaleType() {
    const [selectedSaleType, setSelectedSaleType] = useRecoilState(selectedSaleTypeState)

    return {
        selectedSaleType, 
        setSelectedSaleType
    }
}