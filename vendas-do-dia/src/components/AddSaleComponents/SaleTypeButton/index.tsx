import { CreditCard, Money, CurrencyCircleDollar, IconProps } from "phosphor-react"
import classNames from 'classnames'
import { SaleType } from "../../../common/types/SaleType"
import { memo, useMemo } from "react"
import { useSelectedSaleType } from "../../../common/state/hooks/SelectedSaleHooks/useSelectedSaleType"

 
interface SaleTypeButtonProps {
    type: SaleType
    title: string
    icon: React.ReactElement<React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>>
}

function SaleTypeButton({icon, title, type}:SaleTypeButtonProps) {
    const [selectedSaleType, setSelectedSaleType] = useSelectedSaleType()

    const Icon = useMemo(() => icon ,[selectedSaleType])

    const isSelected = type === selectedSaleType
    
    return (
        <button type="button" onClick={() => setSelectedSaleType(type)}>
            <div className={classNames("flex items-center gap-3 transition-colors delay-75 ", {
                'text-aquaBlue': isSelected 
            })}>
                {Icon}
                <span className="text-2xl font-semibold sm:inline hidden">
                    {title}
                </span>
            </div>
        </button>
    )
}

export default memo(SaleTypeButton)
