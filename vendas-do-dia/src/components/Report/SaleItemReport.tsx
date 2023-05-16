import { IconProps } from "phosphor-react"

interface SaleItemReportProps {
    title: string
    icon: React.ReactElement<React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>>
    value: number
}
export function SaleItemReport(props: SaleItemReportProps) {
    return (
        <div className="w-[15rem] h-[8.5rem] bg-grayBg flex flex-col justify-start gap-1 pt-4">
             <span className="flex items-center justify-center gap-2 text-aquaBlue h-[2.5rem]">
                {props.icon}
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