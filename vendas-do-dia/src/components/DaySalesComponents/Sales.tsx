import { useEffect, useRef } from "react"
import { useSalesValue } from "../../common/state/hooks/SalesHooks/useSalesValue"
import { Sale } from "./Sale"

export function Sales() {
  const salesDiv = useRef<HTMLDivElement>(null)
  const sales = useSalesValue()
    useEffect(() => {
      if (salesDiv.current) {
        salesDiv.current.scrollTop += salesDiv.current.offsetHeight
      }
       
    }, [sales])
    return (
    <article className="md:w-[52rem] sm:h-[42rem] h-[75vh] bg-grayBg sm:px-10 px-5 py-6 overflow-y-auto w-[95vw] scroll-smooth" ref={salesDiv}>
            <ul className="w-full flex sm:gap-8 gap-5 flex-wrap justify-center" >
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