import { AddSale } from "../components/AddSaleComponents/AddSale";
import { DaySales } from "../components/DaySalesComponents/DaySales";
import { Report } from "../components/Report";
import { BottomMenu } from "../components/Menu/BottomMenu";
import { useEffect } from "react";

import { CashDesk } from "../components/CashDeskComponents/CashDeskComponent";
import { useShowComponentsValue } from "../common/state/hooks/ShowComponentsHooks/useShowComponentsValue";
import { useSetShowComponents } from "../common/state/hooks/ShowComponentsHooks/useSetShowComponents";

export function Index() {
    let windowWidth = window.innerWidth
    const showComponents = useShowComponentsValue()
    const setShows = useSetShowComponents()
    function updatePageWidth() {
        windowWidth = window.innerWidth;
        if (windowWidth > 590 ) {
            setShows(shows => ({
                ...shows,
                SalesComponent: {
                    isShow: true
                },
                AddSalesComponent: {
                    isShow: true
                }
            }))
        } 

      
    }
  
    useEffect(() => {
        window.addEventListener('resize',updatePageWidth);
        return () => window.removeEventListener('resize', updatePageWidth);
      }, [windowWidth]);

    return (
        <>

            {showComponents.ReportComponent.isShow && <Report/>}
            {showComponents.CashDeskComponent.isShow && <CashDesk/>}
            <main className="flex justify-center gap-28 py-5 qq:flex-nowrap flex-wrap  md:px-[3.125rem] items-center sm:h-full h-[calc(100vh-80px)] overflow-y-auto">
                    {showComponents.SalesComponent.isShow && <DaySales />}
                    {showComponents.AddSalesComponent.isShow && <AddSale />}
            </main>
            <div className="h-20 bottom-0 sm:hidden "></div>
            <BottomMenu />
        </>
    )
}