import { useSalesValue } from "../../common/state/hooks/useSalesValue";
import { useSetShowComponents } from "../../common/state/hooks/useSetShowComponents";
import { Sale } from "./Sale";


export function DaySales() {
    const sales = useSalesValue()
    const setShowReport = useSetShowComponents()

    return (
        <section className="flex flex-col items-center gap-6 ">
        <h1 className="sm:text-7xl text-5xl font-semibold text-center">
            Vendas do Dia
        </h1>
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
            <input 
            type="button" 
            value="Gerar Relátorio"
            className="bg-aquaBlue sm:w-[32rem] h-[5rem] text-4xl cursor-pointer hover:opacity-80 transition-opacity w-[95vw] hidden sm:block"
            onClick={
                () => setShowReport(shows => ({
                    ...shows,
                    ReportComponent: {
                        isShow: true
                    }
                }))
            }
            />
    </section>
    )
}