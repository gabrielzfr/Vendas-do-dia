import { CreditCard, Money, CurrencyCircleDollar } from "phosphor-react"
import classNames from 'classnames'
import { SaleType } from "../../common/types/SaleType"
import { useSalesContext } from "../../common/contexts/Sales/useSales"

 
interface SaleTypeButtonProps {
    type: SaleType
    title: string
}

export function SaleTypeButton(props:SaleTypeButtonProps) {
    const {selectedSale, setSelectedSale} =  useSalesContext()

    const isSelected = props.type === selectedSale
    
    return (
        <button type="button" onClick={() => setSelectedSale(props.type)}>
            <div className={classNames("flex items-center gap-3 transition-colors delay-75 ", {
                'text-aquaBlue': isSelected 
            })}>
                {
                props.type == 'Money' ? 
                <Money size={76} /> 
                : props.type == 'CreditCard' ? 
                <CreditCard size={76}/> 
                : 
                <CurrencyCircleDollar size={76} />   
                }
                <span className="text-2xl font-semibold sm:inline hidden">
                    {props.title}
                </span>
            </div>
        </button>
    )
}

