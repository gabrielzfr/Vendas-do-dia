import { Sale } from "./Sale";
import { SaleType } from "../AddSale/SaleTypeButton";

interface DaySalesProps {
    sales: {type: SaleType; value: number; }[]
    
    setSales: (type: ({type: SaleType; value: number; }[])) => void
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
        <h1 className="text-7xl font-semibold">
            Vendas do Dia
        </h1>
        <article className="w-[48rem] h-[42rem] bg-grayBg py-6 px-10 overflow-y-auto">
            <ul className="w-full flex gap-8 flex-wrap justify-center">
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
            className="bg-aquaBlue w-[32rem] h-[5rem] text-4xl cursor-pointer hover:opacity-80 transition-opacity"
            />
    </section>
    )
}