import { IconProps } from "phosphor-react"
import classNames from 'classnames'
import { SaleType } from "../../common/types/SaleType"
import { useSelectedSaleType } from "../../common/state/hooks/useSelectedSaleTypeValue"
import { memo, useMemo } from "react"

 
interface SaleTypeButtonProps {
    type: SaleType
    title: string
    icon: React.ReactElement<React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>>
}

function SaleTypeButton({icon, title, type}:SaleTypeButtonProps) {
    const {selectedSaleType, setSelectedSaleType} = useSelectedSaleType()

    const isSelected = type === selectedSaleType

    const Icon = useMemo(() => icon, [])
    
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
