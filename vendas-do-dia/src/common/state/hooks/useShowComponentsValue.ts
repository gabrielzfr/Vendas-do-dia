import { useRecoilValue } from "recoil"
import { showComponentsState } from "../atom"

export function useShowComponentsValue() {
    const showComponents = useRecoilValue(showComponentsState)
    return showComponents
}