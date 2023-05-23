import { useRecoilState } from "recoil"
import { salesState } from "../../atom"

export function useDeleteSale() {
    const [sales, setSales] = useRecoilState(salesState)
    return function deleteSale(id: string) {
        const salesNewArrayFiltered = [...sales].filter(sale => sale.id != id)

        setSales(salesNewArrayFiltered)

        localStorage.setItem('Sales', JSON.stringify(salesNewArrayFiltered))
    }
}