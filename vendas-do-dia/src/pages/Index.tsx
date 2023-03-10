import { AddSale } from "../components/AddSale/AddSale";
import { DaySales } from "../components/Sales/DaySales";
import { Report } from "../components/Report/Report";
import { BottomMenu } from "../components/Menu/BottomMenu";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { showComponentsState } from "../common/state/atom";
import { useEffect } from "react";

export function Index() {
    let windowWidth = window.innerWidth
    const showComponents = useRecoilValue(showComponentsState)
    const setShows = useSetRecoilState(showComponentsState)
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
            <main className="flex justify-center gap-28 py-5 qq:flex-nowrap flex-wrap  md:px-[3.125rem] items-center sm:h-full h-[calc(100vh-80px)] overflow-y-auto">
                    {showComponents.SalesComponent.isShow && <DaySales />}
                    {showComponents.AddSalesComponent.isShow && <AddSale />}
            </main>
            <div className="h-20 bottom-0 sm:hidden "></div>
            <BottomMenu />
        </>
    )
}