import { X } from "phosphor-react";
import { useState } from "react";
import { SaleType } from "../AddSale/SaleTypeButton";
import { SaleItemReport } from "./SaleItemReport";

interface ReportProps {
    setShowReport: (type: boolean) => void
    sales: {type: SaleType; value: number;}[]
}
export function Report(props: ReportProps) {

    const moneySalesTotal = props.sales.filter(sale => sale.type == 'Money').reduce((acc, sale) => acc + sale.value, 0)
    const creditSalesTotal = props.sales.filter(sale => sale.type == 'CreditCard').reduce((acc, sale) => acc + sale.value, 0)
    const pixSalesTotal = props.sales.filter(sale => sale.type == 'Pix').reduce((acc, sale) => acc + sale.value, 0)

    const salesTotal = [moneySalesTotal, creditSalesTotal, pixSalesTotal].reduce((acc, saleTotalItem) => acc + saleTotalItem, 0)

    function copyReport() {
        
    }
    return (
        <span className="fixed z-10 w-[100%] h-[100vh] bg-black bg-opacity-60 flex justify-center items-center">
            <div className="w-[32rem] h-[52rem] bg-blackBg text-center p-4 flex flex-col gap-7">
                <span className="flex justify-end">
                    <div className="flex justify-between items-center  w-[67%]">
                        <h1 className="text-4xl font-bold">
                            Relátorio
                        </h1>
                        <button 
                            className="cursor-pointer hover:opacity-70 transition-opacity"
                            onClick={() => props.setShowReport(false)}
                        >
                            <X  size={40} weight={'bold'}/>
                        </button>
                    </div>
                </span>
                <div className="flex flex-col items-center gap-7">
                    <SaleItemReport saleType="Money" title="Dinheiro" 
                    value={moneySalesTotal} />
                    <SaleItemReport saleType="CreditCard" title="Cartão" value={creditSalesTotal} />
                    <SaleItemReport saleType="Pix" title="Pix" value={pixSalesTotal} />
                    <SaleItemReport saleType="Total" title="Total" value={salesTotal} />
                </div>
                <input 
                type="button" 
                value="Copiar Relátorio" 
                className="cursor-pointer w-[15rem] h-[4.8rem] bg-aquaBlue self-center text-[1.5rem] font-bold hover:opacity-70 transition-opacity"
                onClick={copyReport}
                />
            </div>
        </span>
    )
}