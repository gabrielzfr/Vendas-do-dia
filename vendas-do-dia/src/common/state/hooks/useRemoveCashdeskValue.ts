import { useSetRecoilState } from "recoil"
import { CashDeskState } from "../atom"

export function useRemoveCashdeskValue() {
    const setCashdeskValue = useSetRecoilState(CashDeskState)
    const localStorageCashdesk = localStorage.getItem('Cashdesk')
    const localStorageCashdeskJSON = localStorageCashdesk ? JSON.parse(localStorageCashdesk) : 0

    return (value: number) => {
        localStorage.setItem('Cashdesk', JSON.stringify(localStorageCashdeskJSON - value))
        setCashdeskValue(cashdeskValue => cashdeskValue - value)
    }
}