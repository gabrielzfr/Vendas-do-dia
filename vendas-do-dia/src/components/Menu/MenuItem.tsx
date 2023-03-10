import classNames from "classnames";
import { IconProps} from "phosphor-react";
import { useSetShowComponents } from "../../common/state/hooks/useSetShowComponents";
import { NavItems } from "../../common/types/NavItems";


interface MenuItemProps {
    icon: React.ReactElement<React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>>
    title: string
    showComponent: boolean
    buttonValue: NavItems
}

export function MenuItem({icon, title, buttonValue, showComponent}: MenuItemProps) {
  const setShows = useSetShowComponents()

  function handleSetShowComponent() {
    setShows({
      SalesComponent: {
        isShow: buttonValue == 'sales'
      },
      AddSalesComponent: {
        isShow: buttonValue == 'addSales'
      },
      ReportComponent: {
        isShow: buttonValue == 'report'
      },
    })
  }
  
  return (
        <li>
          <label className={classNames("text-zinc flex flex-col items-center mm:text-xl sm:xl: font-semibold", 
            {
              'text-aquaBlue': showComponent
          }
          )}>
            <button onClick={handleSetShowComponent}>
              {icon}
            </button>
              {title}
          </label>
        </li>  
  );
}
