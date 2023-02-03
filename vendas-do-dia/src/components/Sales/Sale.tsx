import { CreditCard, CurrencyCircleDollar, Money, X } from "phosphor-react"
import { useSalesContext } from "../../common/contexts/Sales/useSales"


interface SaleProps {
    saleType: string
    value: number
    id: string
}
export function Sale(props: SaleProps) {
    const {deleteSale} = useSalesContext()

    return (
        <li
        className="w-[100%] bg-blackBg sm:h-28 h-26 sm:px-7 px-3 pr-2 flex  items-center justify-center sm:pr-2 gap-1 sm:gap-0">
        {
            props.saleType == 'Money' ?
            <Money  className="text-aquaBlue sm:w-[120px] sm:h-[120px] w-[90px] h-[90px]" /> :
            props.saleType == 'CreditCard' ? 
            <CreditCard className="text-aquaBlue sm:w-[120px] sm:h-[120px] w-[90px] h-[90px]" /> :
            <CurrencyCircleDollar className="text-aquaBlue sm:w-[120px] sm:h-[120px] w-[90px] h-[90px]" />
        }
        
        <div className="text-center w-[calc(100%-101px)]">
            <p className=" sm:text-[5.2rem] mm:text-[3.5rem]  text-[3rem]">{props.value.toLocaleString('pt-br', {minimumFractionDigits: 2})}</p>
        </div>
        <button onClick={() => deleteSale(props.id)}>
            <X className="sm:w-[70px] sm:h-[70px] w-[40px] h-[40px] " />
        </button>
    </li>   
    )
}