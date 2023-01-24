import { useState } from "react";
import { AddSale } from "../components/AddSale";
import { DaySales } from "../components/DaySales";
import { SaleType } from "../components/SaleTypeButton";


export function Index() {
    const [sales, setSales] = useState<{type: SaleType; value: number; }[]>([])
    

    return (
        <main className="flex justify-center gap-28 p-5 qq:flex-nowrap flex-wrap">
            <DaySales sales={sales} setSales={setSales} />
            <AddSale setSales={setSales} sales={sales}/>
            
        </main>
    )
}