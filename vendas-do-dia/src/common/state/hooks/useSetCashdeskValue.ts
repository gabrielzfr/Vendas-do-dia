import { useSetRecoilState } from "recoil";
import { CashDeskState } from "../atom";

export function useSetCashdeskValue() {
    const setCashdesk = useSetRecoilState(CashDeskState)
    return (value: number) => {
        localStorage.setItem('Cashdesk', JSON.stringify(value))
        setCashdesk(value)
    }
}