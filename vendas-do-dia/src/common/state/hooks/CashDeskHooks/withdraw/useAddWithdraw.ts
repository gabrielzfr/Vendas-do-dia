import { useRecoilState } from "recoil";
import { cashDeskWithdraw } from "../../../atom";

export function useAddWithdraw() {
    const [withdraw, setWithdraw] = useRecoilState(cashDeskWithdraw)

    return (value: number) => {
        setWithdraw(withdraw => withdraw + value)

        localStorage.setItem('Withdraw', JSON.stringify(withdraw + value))
    }
}