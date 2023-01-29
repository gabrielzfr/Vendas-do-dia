import { CreditCard, Money, CurrencyCircleDollar } from "phosphor-react"
import classNames from 'classnames'
import { SaleType } from "../../common/types/SaleType"

 
interface SaleTypeButtonProps {
    icon: SaleType
    title: string
    selected: SaleType
    setSelected: (type: SaleType) => void
}
export function SaleTypeButton(props:SaleTypeButtonProps) {
    const isSelected = props.icon == props.selected
    return (
        <button type="button" onClick={() => props.setSelected(props.icon)}>
            <div className={classNames("flex items-center gap-3 transition-colors delay-75 ", {
                'text-aquaBlue': isSelected 
            })}>
                {
                props.icon == 'Money' ? 
                <Money size={76} /> 
                : props.icon == 'CreditCard' ? 
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

