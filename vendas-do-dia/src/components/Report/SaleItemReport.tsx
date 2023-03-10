import { CreditCard, CurrencyCircleDollar, Money, Star } from "phosphor-react"
import { SaleType } from "../../common/types/SaleType"

interface SaleItemReportProps {
    title: string
    saleType: SaleType | 'Total'
    value: number
}
export function SaleItemReport(props: SaleItemReportProps) {
    return (
        <div className="w-[15rem] h-[8.5rem] bg-grayBg flex flex-col justify-start gap-1 pt-4">
             <span className="flex items-center justify-center gap-2 text-aquaBlue h-[2.5rem]">
                {
                    props.saleType == 'Money' ?
                    <Money size={65}/> :
                    props.saleType == 'CreditCard' ?
                    <CreditCard size={65}/> :
                    props.saleType == 'Pix' ?
                    <CurrencyCircleDollar size={55}/> :
                    <Star size={45} weight={'fill'} />


                }
                
                <h2 className="text-[1.625rem] font-semibold flex">
                    {props.title}
                </h2>
             </span>
             <span className="flex justify-center">
                <p className="text-[50px] font-semibold">
                    {
                        props.value.toLocaleString('pt-br', {minimumFractionDigits: 2})
                    }
                </p>
             </span>
        </div>
    )
}