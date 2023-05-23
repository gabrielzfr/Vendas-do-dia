import { useRecoilValue } from "recoil"
import { showComponentsState } from "../../atom"

export function useShowComponentsValue() {
    return useRecoilValue(showComponentsState)
}