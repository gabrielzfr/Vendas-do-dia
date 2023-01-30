import { useState } from "react";
import { AddSale } from "../components/AddSale/AddSale";
import { DaySales } from "../components/Sales/DaySales";
import { Report } from "../components/Report/Report";

export function Index() {
    const [showReport, setShowReport] = useState(false)

    return (
        <>
            {showReport ? <Report setShowReport={setShowReport} /> : '' }

            <main className="flex justify-center gap-28 py-5 qq:flex-nowrap flex-wrap  md:px-[3.125rem]">
                    <DaySales setShowReport={setShowReport}/>
                    <AddSale />
                
            </main>
        </>
    )
}