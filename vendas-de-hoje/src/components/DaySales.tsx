import { Money, X } from "phosphor-react";
import { Sale } from "./Sale";
import { SaleType } from "./SaleTypeButton";

interface DaySalesProps {
    sales: {type: string; value: number; }[]
}
export function DaySales(props: DaySalesProps) {
    return (
        <section className="flex flex-col items-center gap-6">
        <h1 className="text-7xl font-semibold">
            Vendas do Dia
        </h1>
        <article className="w-[48rem] h-[42rem] bg-grayBg py-6 px-10 overflow-y-auto">
            <ul className="w-full flex gap-8 flex-wrap justify-center">
            {props.sales.map(sale => {
                    return (
                       <Sale icon={sale.type} value={sale.value}/>
                    )
                })}
            </ul>
        </article>
            <input 
            type="button" 
            value="Gerar Relátorio"
            className="bg-aquaBlue w-[32rem] h-[5rem] text-4xl cursor-pointer"
            />
    </section>
    )
}