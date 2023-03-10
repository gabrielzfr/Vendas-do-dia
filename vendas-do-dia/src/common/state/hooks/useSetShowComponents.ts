import { useSetRecoilState } from "recoil";
import { showComponentsState } from "../atom";

export function useSetShowComponents() {
    const setShowComponents = useSetRecoilState(showComponentsState)
    return setShowComponents
}