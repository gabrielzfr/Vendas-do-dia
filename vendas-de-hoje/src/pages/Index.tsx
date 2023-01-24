import { useState } from "react";
import { AddSale } from "../components/AddSale/AddSale";
import { DaySales } from "../components/Sales/DaySales";
import { SaleType } from "../components/AddSale/SaleTypeButton";
import { Report } from "../components/Sales/Report";


export function Index() {
    const localStorageSales = localStorage.getItem('Sales')
    const [sales, setSales] = useState<{type: SaleType; value: number; }[]>(
       localStorageSales ? JSON.parse(localStorageSales) : []
    )

    const [showReport, setShowReport] = useState(false)

    return (
        <>
            {showReport ? <Report /> : '' }
            <main className="flex justify-center gap-28 p-5 qq:flex-nowrap flex-wrap px-[3.125rem]">
                <DaySales sales={sales} setSales={setSales} />
                <AddSale setSales={setSales} sales={sales}/>
                
            </main>
        </>
    )
}