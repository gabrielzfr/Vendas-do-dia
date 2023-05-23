import { useRecoilState } from "recoil";
import { cashDeskDeposit } from "../../../atom";

export function useAddDeposit() {
    const [deposit, setDeposit] = useRecoilState(cashDeskDeposit)

    return (value: number) => {
        setDeposit(deposit => deposit + value)

        localStorage.setItem('Deposit', JSON.stringify(deposit + value))
    }
}