import { useSalesValue } from "../../common/state/hooks/useSalesValue"
import { Sale } from "./Sale"

export function SalesList() {
    const sales = useSalesValue()
    return (
        <article className="md:w-[52rem] sm:h-[42rem] h-[75vh] bg-grayBg sm:px-10 px-5 py-6 overflow-y-auto w-[95vw]">
            <ul className="w-full flex sm:gap-8 gap-5 flex-wrap justify-center">
            {sales.map(sale => {
                    return (
                       <Sale saleType={sale.type} value={sale.value}
                       key={sale.id} id={sale.id}
                       />
                    )
                })}
            </ul>
        </article>
    )
}