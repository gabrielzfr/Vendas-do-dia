import { X } from "phosphor-react";
import html2canvas from 'html2canvas';
import { SaleType } from "../AddSale/SaleTypeButton";
import { SaleItemReport } from "./SaleItemReport";
import { useState } from "react";
import classNames from "classnames";

interface ReportProps {
    setShowReport: (type: boolean) => void
    sales: {type: SaleType; value: number;}[]
}


export function Report(props: ReportProps) {
    const [takingPrint, isTakingPrint] = useState(false)

    const moneySalesTotal = props.sales.filter(sale => sale.type == 'Money').reduce((acc, sale) => acc + sale.value, 0)
    const creditSalesTotal = props.sales.filter(sale => sale.type == 'CreditCard').reduce((acc, sale) => acc + sale.value, 0)
    const pixSalesTotal = props.sales.filter(sale => sale.type == 'Pix').reduce((acc, sale) => acc + sale.value, 0)

    const salesTotal = [moneySalesTotal, creditSalesTotal, pixSalesTotal].reduce((acc, saleTotalItem) => acc + saleTotalItem, 0 )

    

    async function takeReportPrint() {
        await isTakingPrint(true)
        const canvas = await  html2canvas(document.querySelector('[data-report]')!, {
            allowTaint: true,
            removeContainer: false
        })
        const base64Image =  await canvas.toDataURL('image/png');
        setTimeout(() => isTakingPrint(false), 1000)

        return base64Image
    }

    async function copyReportImage() {
        const ReportPrint = await takeReportPrint()
        const image = await fetch(ReportPrint)
        const blobImage = await image.blob()
        try {

            await navigator.clipboard.write([
                new ClipboardItem({
                    'image/png': blobImage 
                })
            ])
        } catch {
            throw Error('Não foi Possivel Realizar o Pritn tente novamente')
        }

        
    }


    return (
        <span className="fixed z-10 w-[100%] h-[100vh] bg-black bg-opacity-60 flex justify-center items-center" id="report">
            <div className="w-[32rem] h-[52rem] bg-blackBg text-center p-4 flex flex-col gap-7" >
                <div className="flex flex-col gap-7 bg-blackBg rounded-none" data-report>
                    <span className="flex justify-end ">
                        <div className="flex justify-between items-center  w-[67%]">
                            <h1 className="text-4xl font-bold">
                                Relátorio
                            </h1>
                            <button
                                className={classNames("cursor-pointer hover:opacity-70 transition-opacity ", {
                                    'text-blackBg': takingPrint
                                })}
                                onClick={() => props.setShowReport(false)}
                            >
                                <X  size={40} weight={'bold'}/>
                            </button>
                        </div>
                    </span>
                    <div className="flex flex-col items-center gap-7 bg-blackBg rounded-none" >
                        <SaleItemReport saleType="Money" title="Dinheiro"
                        value={moneySalesTotal} />
                        <SaleItemReport saleType="CreditCard" title="Cartão" value={creditSalesTotal} />
                        <SaleItemReport saleType="Pix" title="Pix" value={pixSalesTotal} />
                        <SaleItemReport saleType="Total" title="Total" value={salesTotal} />
                    </div>
                </div>
                <input 
                type="button" 
                value="Copiar Relátorio" 
                className="cursor-pointer w-[15rem] h-[4.8rem] bg-aquaBlue self-center text-[1.5rem] font-bold hover:opacity-70 transition-opacity"
                onClick={copyReportImage}
                />
            </div>
        </span>
    )
}