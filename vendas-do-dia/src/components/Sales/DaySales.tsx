import { useSetShowComponents } from "../../common/state/hooks/useSetShowComponents";
import { SalesList } from "./SalesList";


export function DaySales() {
    
    const setShowReport = useSetShowComponents()

    return (
        <section className="flex flex-col items-center gap-6 ">
        <h1 className="sm:text-7xl text-5xl font-semibold text-center">
            Vendas do Dia
        </h1>
        <SalesList />
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