import { Sale } from "./Sale";
import { SaleType } from "../AddSale/SaleTypeButton";

interface DaySalesProps {
    sales: {type: SaleType; value: number; }[]
    setSales: (type: ({type: SaleType; value: number; }[])) => void
    setShowReport: (type: boolean) => void
}


export function DaySales(props: DaySalesProps) {
    function deleteSale(index: number) {
        const salesNewArray = [...props.sales]
        salesNewArray.splice(index, 1)
        props.setSales(salesNewArray)
        localStorage.setItem('Sales', JSON.stringify(salesNewArray))
    }


    return (
        <section className="flex flex-col items-center gap-6">
        <h1 className="sm:text-7xl text-5xl font-semibold">
            Vendas do Dia
        </h1>
        <article className="md:w-[48rem] h-[42rem] bg-grayBg  sm:px-10 px-5 py-6 overflow-y-auto w-[95%]">
            <ul className="w-full flex sm:gap-8 gap-5 flex-wrap justify-center">
            {props.sales.map((sale, index) => {
                    return (
                       <Sale saleType={sale.type} value={sale.value}
                       key={index} id={index}

                       deleteSale={deleteSale}
                       />
                    )
                })}
            </ul>
        </article>
            <input 
            type="button" 
            value="Gerar Relátorio"
            className="bg-aquaBlue sm:w-[32rem] h-[5rem] text-4xl cursor-pointer hover:opacity-80 transition-opacity w-[95%] "
            onClick={() => props.setShowReport(true)}
            />
    </section>
    )
}