import { useContext, useState } from "react";
import { AddSale } from "../components/AddSale/AddSale";
import { DaySales } from "../components/Sales/DaySales";
import { Report } from "../components/Report/Report";
import { BottomMenu } from "../components/Menu/BottomMenu";
import { ShowComponentsContext } from "../common/contexts/ShowComponents/ShowComponents";
import { useShowComponentsContext } from "../common/contexts/ShowComponents/useShowComponentContext";

export function Index() {
    const {showReport, showSales, showAddSales} = useShowComponentsContext()

    return (
        <>

            {showReport && <Report/>}
            <main className="flex justify-center gap-28 py-5 qq:flex-nowrap flex-wrap  md:px-[3.125rem] items-center sm:h-full h-[calc(100vh-80px)] overflow-y-auto">
                    {showSales && <DaySales />}
                    {showAddSales && <AddSale />}
            </main>
            <div className="h-20 bottom-0 sm:hidden "></div>
            <BottomMenu />
        </>
    )
}