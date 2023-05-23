import { useSetRecoilState } from "recoil";
import { showComponentsState } from "../../atom";

export function useSetShowComponents() {
    return useSetRecoilState(showComponentsState)

}